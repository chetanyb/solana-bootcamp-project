import { setGlobalState, useGlobalState } from "../store";
import { FaTimes } from "react-icons/fa";

const Token = () => {
  const [modal] = useGlobalState("showModal");
  const closeModal = () => {
    setGlobalState("showModal", "scale-0");
  };
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center
    bg-black bg-opacity-50 transform transition-transform duration-300 ${modal}`}
    >
      <div
        className="bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12
        md:w-2/5 h-7/12 p-6"
      >
        <div className="flex flex-col">
          <div className="flex justify-between items-center text-gray-400">
            <p className="font-semibold">Create Token</p>
            <button
              type="button"
              className="border-0 bg-transparent focus:outline-none"
              onClick={closeModal}
            >
              <FaTimes />
            </button>
          </div>


          <div className="flex flex-col justify-between items-center">
            <div className="flex w-full justify-between items-center bg-gray-800 rounded-xl mt-5">
              <input
                type="number"
                className="block w-full text-sm text-slate-500 focus:outline-none
                focus:ring-0 bg-transparent border-0 p-2"
                placeholder="Amount (SOL)"
                min={1}
                step={1}
                name="amount"
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
            <button
              className="flex w-full justify-center items-center shadow-lg shadow-black text-sm bg-[#e32970]
            hover:bg-[#bd255f] text-white rounded-full p-2 mt-5"
            >
              Create Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;
