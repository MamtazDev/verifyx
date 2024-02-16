import ADIcon from "../assets/add-icon.svg";
import DIcon from "../assets/delete-icon.svg";
import EIcon from "../assets/edit-icon.svg";
import LArrow from "../assets/left-arrow.svg";
import sLogo from "../assets/small-logo.svg";
import MIcon from "../assets/text-icon.svg";
import THIcon from "../assets/thai.png";
import QAIcon from "../assets/qatar.png";
import UIcon from "../assets/user-icon.svg";
import YESIcon from "../assets/yes.svg";
import NOIcon from "../assets/no.svg";
import SENDIcon from "../assets/send-icon.svg";
import FILEIcon from "../assets/file-icon.svg";

import { Link } from "react-router-dom";

const Chat = () => {
  return (
    <section className="chat_layout">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-3">
          <div className="left_side h-screen">
            <div className="top_bar flex items-center justify-between mb-10">
              <button>
                <img src={LArrow} alt="icon" />
              </button>
              <div className="brand_nav">
                <img src={sLogo} alt="icon" />
              </div>
              <button>
                <img src={UIcon} alt="icon" />
              </button>
            </div>

            <div className="search_history">
              <div className="recent">
                <div className="title text-center mb-[21px]">
                  <p className="text-xl font-normal text-white border border-white rounded-[21px] shadow-shadowOne py-1 px-4 inline-block">
                    Today
                  </p>
                </div>
                <div className="message_wrapper flex items-center justify-between mb-[30px]">
                  <div className="message_title flex gap-2 items-center">
                    <img src={MIcon} alt="icon" />
                    <p className="text-xl text-white font-normal cursor-pointer">
                      Is my contract fair?
                    </p>
                  </div>
                  <div className="message_action flex items-center gap-5">
                    <button>
                      <img src={EIcon} alt="icon" />
                    </button>
                    <button>
                      <img src={DIcon} alt="icon" />
                    </button>
                  </div>
                </div>

                <div className="message_wrapper flex items-center justify-between mb-[30px]">
                  <div className="message_title flex gap-2 items-center">
                    <img src={MIcon} alt="icon" />
                    <p className="text-xl text-white font-normal cursor-pointer">
                      Was 9/11 real?
                    </p>
                  </div>
                  <div className="message_action flex items-center gap-5">
                    <button>
                      <img src={EIcon} alt="icon" />
                    </button>
                    <button>
                      <img src={DIcon} alt="icon" />
                    </button>
                  </div>
                </div>

                <div className="message_wrapper flex items-center justify-between mb-[30px]">
                  <div className="message_title flex gap-2 items-center">
                    <img src={MIcon} alt="icon" />
                    <p className="text-xl text-white font-normal cursor-pointer">
                      How old is Joe Biden?
                    </p>
                  </div>
                  <div className="message_action flex items-center gap-5">
                    <button>
                      <img src={EIcon} alt="icon" />
                    </button>
                    <button>
                      <img src={DIcon} alt="icon" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="last_month">
                <div className="title text-center mb-[21px]">
                  <p className="text-xl font-normal text-white border border-white rounded-[21px] shadow-shadowOne py-1 px-4 inline-block">
                    May
                  </p>
                </div>
                <div className="message_wrapper flex items-center justify-between mb-[30px]">
                  <div className="message_title flex gap-2 items-center">
                    <img src={MIcon} alt="icon" />
                    <p className="text-xl text-white font-normal cursor-pointer">
                      When will BTC ETF come out?
                    </p>
                  </div>
                  <div className="message_action flex items-center gap-5">
                    <button>
                      <img src={EIcon} alt="icon" />
                    </button>
                    <button>
                      <img src={DIcon} alt="icon" />
                    </button>
                  </div>
                </div>

                <div className="message_wrapper flex items-center justify-between mb-[30px]">
                  <div className="message_title flex gap-2 items-center">
                    <img src={MIcon} alt="icon" />
                    <p className="text-xl text-white font-normal cursor-pointer">
                      New Search
                    </p>
                  </div>
                  <div className="message_action flex items-center gap-5">
                    <button>
                      <img src={EIcon} alt="icon" />
                    </button>
                    <button>
                      <img src={DIcon} alt="icon" />
                    </button>
                  </div>
                </div>

                <div className="message_wrapper flex items-center justify-between mb-[30px]">
                  <div className="message_title flex gap-2 items-center">
                    <img src={MIcon} alt="icon" />
                    <p className="text-xl text-white font-normal cursor-pointer">
                      New Search
                    </p>
                  </div>
                  <div className="message_action flex items-center gap-5">
                    <button>
                      <img src={EIcon} alt="icon" />
                    </button>
                    <button>
                      <img src={DIcon} alt="icon" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="last_month">
                <div className="title text-center mb-[21px]">
                  <p className="text-xl font-normal text-white border border-white rounded-[21px] shadow-shadowOne py-1 px-4 inline-block">
                    April
                  </p>
                </div>
                <div className="message_wrapper flex items-center justify-between mb-[30px]">
                  <div className="message_title flex gap-2 items-center">
                    <img src={MIcon} alt="icon" />
                    <p className="text-xl text-white font-normal cursor-pointer">
                      New Search
                    </p>
                  </div>
                  <div className="message_action flex items-center gap-5">
                    <button>
                      <img src={EIcon} alt="icon" />
                    </button>
                    <button>
                      <img src={DIcon} alt="icon" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="load_more text-center border-b border-b-[#D9D9D9] pb-2 mb-[35px]">
                <button className="text-lg font-medium text-center text-[#ffffffc9]">
                  Load more....
                </button>
              </div>

              <div className="new_search_wrapper flex justify-center">
                <button className="text-lg font-medium text-center text-[#ffffffc9] new_search flex items-center gap-3 py-[24px] px-[17px]">
                  <img src={ADIcon} alt="icon" />
                  New Search
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-9">
          <div className="chat_his my-3 text-center">
            <p className="inline-block px-4 py-1 text-xl font-normal text-white shadow-shadowOne">
              Today
            </p>
          </div>

          <div className="chat_one">
            <p className="chat_item inline-block py-1 max-w-[470px] w-full px-[30px] font-medium text-white text-lg">
              to Thailand. What is the best route and <br /> what visas do I
              need? Is it through india <br /> or no?
            </p>
            <span className="time block text-base text-[#B5B5B5] ml-8 mt-2">
              08:55
            </span>
          </div>

          <div className="chat_two flex justify-end mb-10">
            <div className="chat_item inline-block py-1 max-w-[665px] w-full px-[30px] font-medium text-black text-lg">
              Actually the best route is a direct flight from Frankfurt to
              Thailand. <br /> <br /> It is the fastest and the cheapest option
              that won’t require any extra transit visas.
              <span className="pb-5 block text-[#0AB6FF] cursor-pointer">
                {" "}
                read more....
              </span>
            </div>
          </div>

          <div className="chat_two flex flex-col items-end mb-[80px] relative">
            <div className="chat_item inline-block py-1 max-w-[560px] w-full px-[30px] font-medium text-black text-lg">
              Here are some flight companies offering that:
              <p className="text-lg font-medium text-[#0AB6FF] flex items-center gap-3 mb-3">
                <img src={THIcon} alt="icon" />
                <Link to={"#"}>Chaeck for flights</Link>
              </p>
              <p className="text-lg font-medium text-[#0AB6FF] flex items-center gap-3 mb-3">
                <img src={QAIcon} alt="icon" />
                <Link to={"#"}>Chaeck for flights</Link>
              </p>
              <span className="pb-5 block text-[#0AB6FF] cursor-pointer">
                show more....
              </span>
            </div>
            <div className="flex flex-col justify-start absolute bottom-[-30px] right-[485px]">
              <span className="time block text-base text-[#B5B5B5]">08:55</span>
            </div>
          </div>

          <div className="feedback text-center border-t border-t-black">
            <p className="text-[22px] font-normal text-[#505050] pt-4 mb-4">
              Is the given answer accurate?
            </p>

            <div className="feedback_btn_wrapper flex justify-center gap-3">
              <button className="flex gap-2 items-center border border-[#B3B3B3] py-1 px-2 rounded-full">
                <img src={YESIcon} alt="icon" />
                Yes
              </button>
              <button className="flex gap-2 items-center border border-[#B3B3B3] py-1 px-2 rounded-full">
                <img src={NOIcon} alt="icon" />
                No
              </button>
            </div>
          </div>

          <div className="input_from_wrapper fixed bottom-[40px] w-[73%]">
            <div className="input_form relative">
              <input
                className="w-full h-[65px] border border-[#B3B3B3] py-5 px-[30px] rounded-full outline-none"
                type="text"
                placeholder="Ask anything..."
              />

              <button className="absolute top-[50%] translate-y-[-50%] right-[12px]">
                <img src={SENDIcon} alt="icon" />
              </button>

              <button className="absolute top-[50%] translate-y-[-50%] right-[70px]">
                <img src={FILEIcon} alt="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chat;
