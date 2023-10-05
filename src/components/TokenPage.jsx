import { BiTransfer } from "react-icons/bi";
import { MdOpenInNew } from "react-icons/md";

const TokenPage = () => {
  return (
    <div className="bg-[#131835] py-10 h-screen">
      <div className="w-4/5 py-10 mx-auto">
        <h4 className="text-white text-3xl font-bold uppercase text-gradient">
          All Tokens
        </h4>
        <table class="min-w-full border text-white rounded-lg overflow-hidden mt-5">
          <thead>
            <tr className="rounded-md shadow-sm shadow-pink-500 p-2">
              <th class="w-1/4 px-4 py-2 text-left">Token Name</th>
              <th class="w-1/4 px-4 py-2 text-left">Symbol</th>
              <th class="w-1/4 px-4 py-2 text-left">Price (USD)</th>
              <th class="w-1/4 px-4 py-2 text-left">Market Cap (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="rounded-md shadow-sm shadow-pink-500 p-2">
              <td class="px-4 py-2">Solana Token 1</td>
              <td class="px-4 py-2">SOL1</td>
              <td class="px-4 py-2">$100</td>
              <td class="px-4 py-2">$10,000,000</td>
            </tr>
          </tbody>
        </table>
        {/* <div className="text-center mt-10 my-5">
          <button className="shadow-lg shadow-black text-sm bg-[#e32970] hover:bg-[#bd255f] text-white rounded-full p-2">
            Load More
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default TokenPage;
