import sol from "../assets/sol2.png";

const Footer = () => {
  return (
    <div
      className="w-full flex md:justify-center justify-between items-center flex-col
    p-4 gradient-bg-footer"
    >
      <div className="w-full flex flex-col justify-between items-center my-4">
        {/* <div
          className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5
            w-full text-center text-white text-base"
        >
          <p className="mx-2 cursor-pointer">Explore</p>
          <p className="mx-2 cursor-pointer">Features</p>
          <p className="mx-2 cursor-pointer">Community</p>
        </div> */}
        <div className="flex justify-center items-center mt-4">
          <img
            className="w-8 cursor-pointer rounded-lg mr-2"
            src={sol}
            alt="dchain logo"
          />
          <span className="text-white text-sm">
            &copy; SOL Faucet, Made with ❤️ by Group-3
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
