import ADIcon from "../assets/add-icon.svg";
import DIcon from "../assets/delete-icon.svg";
import EIcon from "../assets/edit-icon.svg";
import FILEIcon from "../assets/file-icon.svg";
import LArrow from "../assets/left-arrow.svg";
import sLogo from "../assets/logo-big.png";
import logout from "../assets/logout.png";
import NOIcon from "../assets/no.svg";
import QAIcon from "../assets/qatar.png";
import SENDIcon from "../assets/send-icon.svg";
import MIcon from "../assets/text-icon.svg";
import THIcon from "../assets/thai.png";
import UIcon from "../assets/user-icon.svg";
import YESIcon from "../assets/yes.svg";

import { useState } from "react";
import { Link } from "react-router-dom";

const Chat = () => {
  const [display, setDisplay] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const history = [
    "Is my contract fair?",
    "Was 9/11 real?",
    "How old is Joe Biden?",
    "When will BTC ETF come out?",
    "New Search",
    "New Search",
    "New Search",
    "New Search",
    "New Search",
  ];
  return (
    <section className="chat_layout ">
      <div className="lg:grid grid-cols-12 ">
        <div
          className={`${
            display ? "fixed " : "hidden lg:block lg:static"
          }" col-span-12 lg:col-span-3  z-50 "`}
        >
          <div className="left_side h-screen overflow-y-auto">
            <div className="top_bar flex items-center justify-between mb-10">
              <button onClick={() => setDisplay(false)}>
                <img src={LArrow} alt="icon" />
              </button>
              <div className="brand_nav">
                <img src={sLogo} alt="icon" />
              </div>
              <button onClick={() => setShowLogout(!showLogout)}>
                <img src={UIcon} alt="icon" />
              </button>
            </div>
            {showLogout && (
              <button className="fixed right-0 top-[85px]">
                <img src={logout} alt="" />
              </button>
            )}

            <div className="search_history">
              <div className="recent">
                <div className="title text-center mb-[21px]">
                  <p className="text-xl font-normal text-white border border-white rounded-[21px] shadow-shadowOne py-0 lg:py-1 px-4 inline-block">
                    Today
                  </p>
                </div>
                {history.slice(0, 3).map((data, index) => (
                  <div
                    key={index}
                    className="message_wrapper flex items-center justify-between mb-[23px] lg:mb-[30px]"
                  >
                    <div className="message_title flex gap-2 items-center">
                      <img src={MIcon} alt="icon" />
                      <p className="text-xl text-white font-normal cursor-pointer">
                        {data}
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
                ))}
              </div>

              <div className="last_month">
                <div className="title text-center mb-[21px]">
                  <p className="text-xl font-normal text-white border border-white rounded-[21px] shadow-shadowOne py-1 px-4 inline-block">
                    May
                  </p>
                </div>
                {history.slice(3, 6).map((data, index) => (
                  <div
                    key={index}
                    className="message_wrapper flex items-center justify-between mb-[23px] lg:mb-[30px]"
                  >
                    <div className="message_title flex gap-2 items-center">
                      <img src={MIcon} alt="icon" />
                      <p className="text-xl text-white font-normal cursor-pointer">
                        {data}
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
                ))}
              </div>

              <div className="last_month">
                <div className="title text-center mb-[21px]">
                  <p className="text-xl font-normal text-white border border-white rounded-[21px] shadow-shadowOne py-1 px-4 inline-block">
                    April
                  </p>
                </div>
                {history.slice(6, 7).map((data, index) => (
                  <div
                    key={index}
                    className="message_wrapper flex items-center justify-between mb-[23px] lg:mb-[30px]"
                  >
                    <div className="message_title flex gap-2 items-center">
                      <img src={MIcon} alt="icon" />
                      <p className="text-xl text-white font-normal cursor-pointer">
                        {data}
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
                ))}
              </div>

              <div className="load_more text-center border-t border-t-[#D9D9D9] pt-2 mb-[50px]">
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

        <div className="col-span-12 lg:col-span-9 ">
          <div className="h-screen  flex flex-col gap-1 p-5 ">
            <div className="lg:hidden  h-[92px] left_side top_bar flex items-center justify-between  mb-[17px]">
              <button onClick={() => setDisplay(true)}>
                <img src={LArrow} alt="icon" />
              </button>
              <div className="brand_nav">
                <img src={sLogo} alt="icon" />
              </div>
              <div></div>
            </div>
            <div className="chat_body overflow-y-auto">
              <div className="chat_his my-3 text-center">
                <p className="inline-block px-4 py-1 text-base lg:text-xl font-normal text-white shadow-shadowOne">
                  Today
                </p>
              </div>

              <div className="chat_minus_one md:hidden">
                <p className="chat_item inline-block py-1 max-w-[248px] w-full px-[30px] font-medium text-white text-lg bg-white">
                  Hello, how may I help <br /> You today?
                </p>
                <span className="time block text-base text-[#B5B5B5] ml-8 my-2">
                  08:55
                </span>
              </div>

              <div className="chat_one flex lg:flex-none flex-col items-end md:hidden">
                <p className="chat_item inline-block py-4 max-w-[285px] lg:max-w-[470px] w-full px-[30px] font-medium text-white text-lg">
                  I’ve seen news on a <br /> Project called Solidus Ai <br />{" "}
                  getting a 100 million <br /> dollar deal with <br />{" "}
                  Microsoft, is that true? to Thailand.
                </p>
                <span className="time block text-base text-[#B5B5B5] ml-8 my-2 mr-8 md:mr-0">
                  08:55
                </span>
              </div>

              <div className="chat_one flex lg:flex-none flex-col items-end">
                <p className="chat_item inline-block py-1 max-w-[285px] lg:max-w-[470px] w-full px-[30px] font-medium text-white text-lg">
                  to Thailand. What is the best route and <br /> what visas do I
                  need? Is it through india <br /> or no?
                </p>
                <span className="time block text-base text-[#B5B5B5] ml-8 my-2 mr-8 md:mr-0">
                  08:55
                </span>
              </div>

              <div className="chat_two flex justify-end mb-5">
                <div className="chat_item inline-block p-5 max-w-[665px] w-full font-medium text-black text-lg">
                  Actually the best route is a direct flight from Frankfurt to
                  Thailand. <br /> <br /> It is the fastest and the cheapest
                  option that won’t require any extra transit visas.
                  <span className="block text-[#0AB6FF] cursor-pointer">
                    {" "}
                    read more....
                  </span>
                </div>
              </div>

              <div className="chat_two flex flex-col items-end mb-[80px] relative">
                <div className="chat_item inline-block p-5 max-w-[560px] w-full  font-medium text-black text-lg">
                  Here are some flight companies offering that:
                  <div className="mt-1 text-lg font-medium text-[#0AB6FF] flex items-center gap-3 mb-3">
                    <img src={THIcon} alt="icon" />
                    <Link to={"#"}>Chaeck for flights</Link>
                  </div>
                  <div className="text-lg font-medium text-[#0AB6FF] flex items-center gap-3 mb-3">
                    <img src={QAIcon} alt="icon" />
                    <Link to={"#"}>Chaeck for flights</Link>
                  </div>
                  <span className="block text-[#0AB6FF] cursor-pointer">
                    show more....
                  </span>
                </div>
                <div className="flex flex-col justify-start absolute bottom-[-30px] right-[485px]">
                  <span className="time block text-base text-[#B5B5B5]">
                    08:55
                  </span>
                </div>
              </div>

              <div className="feedback text-center border-t border-t-black mb-5">
                <p className="text-[22px] font-normal text-[#505050] pt-2 mb-4">
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
            </div>

            <div className="input_from_wrapper static lg:fixed bottom-[40px] w-full lg:w-[73%]">
              <div className="input_form relative ">
                <input
                  className="w-full pr-[120px] h-[65px] border border-[#B3B3B3]  px-[30px] rounded-full outline-none"
                  type="text"
                  placeholder="Ask anything..."
                />
                <div className="flex items-center gap-2 absolute top-[50%] translate-y-[-50%] right-[12px]">
                  <button>
                    <img src={FILEIcon} alt="icon" />
                  </button>
                  <button>
                    <img src={SENDIcon} alt="icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chat;
