import github from "../assets/github_icon.png";
import facebook from "../assets/facebook_icon.png";
import twitter from "../assets/twitter_icon.png";
import linkedIn from "../assets/linkedIn_icon.png";
import medium from "../assets/medium_icon.png";
import { setGlobalState } from "../store";

const Hero = () => {
    const setModal = () => {
      setGlobalState("showModal", "scale-100");
    };
  return (
    <div
      className="bg-[url('https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416_960_720.png')]
    bg-no-repeat bg-cover"
    >
      <div className="flex flex-col justify-center items-center mx-auto py-10">
        <h1 className="text-white text-5xl font-bold text-center">
          SOL <br />
          <span className="text-gradient">Faucet</span> For Devs
        </h1>
        <p className="text-white font-semibold text-sm mt-3"></p>

        <button
          onClick={setModal}
          className="shadow-xl shadow-black text-white bg-[#e32970] hover:bg-[#bd255f]
        p-2 cursor-pointer rounded-full my-4"
        >
          Create Token
        </button>

        <ul className="flex flex-row justify-center space-x-2 items-center my-4">
          <a
            className="bg-white hover:scale-50 transition-all duration-75 delay-75
            rounded-full mx-2"
            href="#"
          >
            <img className="w-7 h-7" src={github} alt="Github" />
          </a>
          <a
            className="bg-white hover:scale-50 transition-all duration-75 delay-75
            rounded-full mx-2"
            href="#"
          >
            <img className="w-7 h-7" src={facebook} alt="Github" />
          </a>
          <a
            className="bg-white hover:scale-50 transition-all duration-75 delay-75
            rounded-full mx-2"
            href="#"
          >
            <img className="w-7 h-7" src={linkedIn} alt="Github" />
          </a>
          <a
            className="bg-white hover:scale-50 transition-all duration-75 delay-75
            rounded-full mx-2"
            href="#"
          >
            <img className="w-7 h-7" src={twitter} alt="Github" />
          </a>
          <a
            className="bg-white hover:scale-50 transition-all duration-75 delay-75
            rounded-full mx-2"
            href="#"
          >
            <img className="w-7 h-7" src={medium} alt="Github" />
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
