import sLogo from "../assets/small-logo.svg";
import LArrow from "../assets/left-arrow.svg";
import UIcon from "../assets/user-icon.svg";
import MIcon from "../assets/text-icon.svg";
import DIcon from "../assets/delete-icon.svg";
import EIcon from "../assets/edit-icon.svg";
import ADIcon from "../assets/add-icon.svg";

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
                <button className="text-lg font-medium text-center text-[#ffffffc9] new_search flex items-center py-[24px] px-[17px]">
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
            <p>
              to Thailand. What is the best route and what visas do I need? Is
              it through india or no?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chat;
