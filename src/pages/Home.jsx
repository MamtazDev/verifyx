import { Link } from "react-router-dom";
import VerifyLogo from "../assets/verifyx-logo.png";

const Home = () => {
  return (
    <div className="v_main_page h-screen ">
      <div className="container">
        {/* brand nav */}
        <div className="flex justify-center pt-[84px] pb-[160px]">
          <img className="w-fit" src={VerifyLogo} alt="verify-logo" />
        </div>
        {/* brand nav -/ end */}

        {/* singin/singup */}
        <h4 className="title-style">
          Get Started
        </h4>
        {/* singin/singup -/end */}
        <div className="btn_wrapper flex flex-col gap-4 items-center">
          <Link
            to={"/create-account"}
            className="inline-block w-[288px] py-[18px] shadow-shadowOne text-center text-lg font-medium rounded-[25px] bg-[#4171FC] text-white">
            Sign up
          </Link>
          <Link className="inline-block w-[288px] py-[18px] shadow-shadowOne text-center text-lg font-medium rounded-[25px] border border-[#4171FC] text-[#4171FC]">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
