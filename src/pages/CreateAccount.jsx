import { Link } from "react-router-dom";
import Gimg from "../assets/google.svg";
import Mimg from "../assets/microsoft.svg";
import Aimg from "../assets/apple.svg";

const CreateAccount = () => {
  return (
    <div className="v_main_page h-screen ">
      <div className="container">
        {/* title */}
        <h4 className="title-style pt-[34px]">Create account</h4>
        {/* title -/ end */}

        {/* input form */}
        <div className="form_wrapper max-w-[370px] w-full mx-auto">
          <div className="input_form mb-[42px] lg:mb-[28px]">
            {/* email */}
            <div className="email_input mb-5 lg:mb-0">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-white"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                className="w-full border-2 rounded-[25px] bg-transparent px-[50px] outline-none h-[70px] lg:h-[65px] placeholder:text-white text-white"
                placeholder="kris.grigauskas@gmail.com"
              />
            </div>
            {/* email -/end */}

            {/* password */}
            <div className="password_input">
              <label
                htmlFor="password"
                className="block text-lg font-medium text-white"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full border-2 rounded-[25px] bg-transparent px-[50px] outline-none h-[70px] lg:h-[65px] placeholder:text-white text-white"
                placeholder="*************"
              />
            </div>
            {/* password -/end */}
          </div>
          <Link to="/chat">
            <button className="py-[20px] w-full border-2 border-[#86A5FF] rounded-[25px] text-lg text-white font-medium shadow-shadowOne mb-[20px] lg:mb-[13px]">
              Sign Up
            </button>
          </Link>

          <div className="text-center mb-[22px] lg:mb-[11px]">
            <Link
              to={"/login"}
              className="text-lg lg:text-base font-medium text-[#F1F9FF]"
            >
              Already have an account...
            </Link>
          </div>
          <div className="or flex mb-[21px] lg:mb-[28px]">
            <div className="lr_border border-b border-b-[#FEFEFE] max-w-[175px] w-full m-0"></div>
            <p className="text-[#F1F9FF] text-lg lg:text-base font-medium leading-none mx-[10px]">
              Or
            </p>
            <div className="lr_border border-b border-b-[#FEFEFE] max-w-[175px] w-full m-0"></div>
          </div>

          <div className="others_login">
            <button className="h-[70px] pl-[26px] w-full border-2 border-white rounded-[25px] text-lg text-white font-medium shadow-shadowOne mb-[20px]">
              <span className="flex items-center gap-4">
                <img src={Gimg} alt="icon" />
                Continue with Google
              </span>
            </button>

            <button className="h-[70px]  pl-[26px] w-full border-2 border-white rounded-[25px] text-lg text-white font-medium shadow-shadowOne mb-[20px]">
              <span className="flex items-center gap-4">
                <img src={Mimg} alt="icon" />
                Continue with Google
              </span>
            </button>

            <button className=" h-[70px]  pl-[26px] w-full border-2 border-white rounded-[25px] text-lg text-[#585757] font-medium shadow-shadowOne mb-[20px]">
              <span className="flex items-center gap-4">
                <img src={Aimg} alt="icon" />
                Continue with Google
              </span>
            </button>
          </div>
        </div>
        {/* input form -/end */}
      </div>
    </div>
  );
};

export default CreateAccount;
