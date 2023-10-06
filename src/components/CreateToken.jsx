//The code doesn't allow to mint more of existing tokens at the moment
import React, { useState } from 'react';
import { Connection, Keypair, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { AccountLayout, createMint, getOrCreateAssociatedTokenAccount, mintTo, TOKEN_PROGRAM_ID } from '@solana/spl-token';


const CreateToken = () => {
  const [status, setStatus] = useState("");
  const [keypair, setKeypair] = useState(null);
  const [mintAddress, setMintAddress] = useState("");
    const [tokenAccount, setTokenAccount] = useState("");
    const [tokenAccounts, setTokenAccounts] = useState([]);
    const [amount, setAmount] = useState(0);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = async (e) => {
      try {
        const json = JSON.parse(e.target.result);
        setKeypair(Keypair.fromSecretKey(new Uint8Array(json)));
      } catch (err) {
        setStatus("Invalid keypair JSON file");
      }
    };

    reader.readAsText(file);
  };

  const createNewToken = async () => {
    try {
      if (!keypair) {
        setStatus("No keypair provided");
        return;
      }
      
      setStatus("Creating new token...");

      const connection = new Connection("http://127.0.0.1:8899", 'confirmed');

      const airdropSignature = await connection.requestAirdrop(keypair.publicKey, LAMPORTS_PER_SOL);
      await connection.confirmTransaction(airdropSignature);
      
      const mint = await createMint(
        connection,
        keypair,
        keypair.publicKey,
        null,
        9,
      );
      setMintAddress(mint);

      setStatus(`New token created with mint address: ${mint.toBase58()}`);
    } catch (err) {
      setStatus(`Error creating token: ${err.message}`);
    }
};

    const createAccount = async () => {
        if (!mintAddress) {
          setStatus("No mint address provided");
          return;
        }

        const connection = new Connection("http://127.0.0.1:8899", 'confirmed');

        setStatus("Creating new token account...");

        const tokenAccount = await getOrCreateAssociatedTokenAccount(
            connection,
            keypair,
            mintAddress,
            keypair.publicKey,
        );

        setTokenAccount(tokenAccount);
        setStatus(`New token account created: ${tokenAccount.address.toBase58()}`);
  };

  const mintTokens = async () => {
    if (!mintAddress) {
      setStatus("No mint address provided");
      return;
    }

    const connection = new Connection("http://127.0.0.1:8899", 'confirmed');

    setStatus("Minting tokens...");

    await mintTo(
        connection,
        keypair,
        mintAddress,
        tokenAccount.address,
        keypair.publicKey,
        amount
    );

    setStatus(`Minted ${amount} tokens to ${tokenAccount.address.toBase58()}`);
};

const viewAllTokens = async () => {
    if (!keypair) {
      setStatus("No keypair provided");
      return;
    }

    const connection = new Connection("http://127.0.0.1:8899", 'confirmed');

    setStatus("Viewing all tokens...");

    const tokenAccounts = await connection.getTokenAccountsByOwner(
        keypair.publicKey,
        { programId: TOKEN_PROGRAM_ID }
    );

    setTokenAccounts(tokenAccounts.value);
    setStatus(`Found ${tokenAccounts.value.length} token accounts`);
    return ( <div>
        <table class="min-w-full border text-white rounded-lg overflow-hidden mt-5">
            <thead>
                <tr className="rounded-md shadow-sm shadow-pink-500 p-2">
                    <th class="w-1/4 px-4 py-2 text-left">Mint Address</th>
                    <th class="w-1/4 px-4 py-2 text-left">Token Address</th>
                    <th class="w-1/4 px-4 py-2 text-left">Amount</th>
                </tr>
            </thead>
            <tbody>
    {tokenAccounts.value.map((tokenAccount) => {
        const accountData = AccountLayout.decode(tokenAccount.account.data);
        return (
            <tr className="rounded-md shadow-sm shadow-pink-500 p-2" key={tokenAccount.pubkey.toBase58()}>
                <td class="px-4 py-2">{accountData.mint.toBase58()}</td>
                <td class="px-4 py-2">{tokenAccount.pubkey.toBase58()}</td>
                <td class="px-4 py-2">{accountData.amount}</td>
            </tr>
        );
    })}
</tbody>
        </table>
    </div>
    );
};

  return (
    <div className='bg-[#131835] py-10'>
      <input className='py-3.5 sm:px-6 px-3.5 outline-none border-2 border-white bg-transparent text-sm  rounded-lg sm:min-w-72' type="file" onChange={handleFileChange} />
      <button className="shadow-xl text-xl shadow-black text-white bg-[#e32970] hover:bg-[#bd255f]
      md:text-xs p-2 rounded-full ml-12" onClick={createNewToken}>Create New Token</button>
      <p className='text-white text-2xl ml-2'>{status}</p>
        <input 
        className='py-3.5 text-white sm:px-6 px-3.5 outline-none border-2 border-white bg-transparent text-sm  rounded-lg sm:min-w-72'
            type="text" 
            value={mintAddress} 
            onChange={(e) => setMintAddress(e.target.value)}
            placeholder="Enter Mint Address"
        />
        <button className={`shadow-lg shadow-black bg-[#e32970] hover:bg-[#bd255f] text-white font-bold py-2 px-4 rounded-full ml-5 mr-5`} onClick={createAccount}>Create New Token Account</button>
        <input 
        className='py-3.5 text-white sm:px-6 px-3.5 outline-none border-2 border-white bg-transparent text-sm  rounded-lg sm:min-w-72'
        type='number'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter Amount"
        />
        <button className={`shadow-lg shadow-black bg-[#e32970] hover:bg-[#bd255f] text-white font-bold py-2 px-4 rounded-full ml-5 mr-5`} onClick={mintTokens}>Mint Tokens</button>
        <button className={`shadow-lg shadow-black bg-[#e32970] hover:bg-[#bd255f] text-white font-bold py-2 px-4 rounded-full`} onClick={viewAllTokens}>View All Tokens</button>
      {tokenAccounts.length > 0 && (
        <table className='text-white text ml-2'>
          <thead>
            <tr>
              <th>Mint Address</th>
              <th>Token Address</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {tokenAccounts.map((tokenAccount) => {
              const accountData = AccountLayout.decode(tokenAccount.account.data);
              return (
                <tr key={tokenAccount.pubkey.toBase58()}>
                  <td>{accountData.mint.toBase58()}</td>
                  <td>{tokenAccount.pubkey.toBase58()}</td>
                  <td>{accountData.amount.toString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CreateToken;