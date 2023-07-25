'use client'
import { BsChat, BsDot } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { IoShareOutline, IoStatsChart } from "react-icons/io5";
const MainContent = () => {
  return (
    <main className="ml-[275px] flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
          <h1 className="text-xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0">
            Home
          </h1>

          {/* top */}
          <div className="border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch  py-4 space-x-2 border-gray-600 h-32 relative">
            <div className="w-10 h-10 bg-slate-400 rounded-full flex-none">
              f
            </div>
            <div className="flex flex-col w-full h-full">
              <input
                className="w-full text-2xl h-full placeholder:text-gray-600 bg-transparent border-b-[0.5px] p-4 border-gray-600 outline-none border-none"
                type="text"
                placeholder="Qué está pasando?"
              />
              <div className="w-full justify-between items-center flex">
                <div></div>
                <div className="w-full max-w-[100px]">
                  <button className="rounded-full  bg-primary px-4 py-2 w-full text-lg text-center hover:bg-opacity-70 transition duration-200 font-bold">
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* timeline tweets */}
          <div className="flex flex-col">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="border-b-[0.5px] border-gray-600 p-4 flex space-x-4"
              >
                <div>
                  <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                </div>
                <div className="flex flex-col">
                  {/* info */}
                  <div className="flex items-center space-x-1">
                    <div className="font-bold">usuario</div>
                    <div className="text-gray-500">@usuario.mail</div>
                    <div className="text-gray-500">
                      <BsDot />
                    </div>
                    <div className="text-gray-500">1 hour ago</div>
                  </div>
                  {/* text */}
                  <div className="text-white text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias ratione dolorum praesentium accusamus quidem at
                    architecto tempore tempora. Provident exercitationem velit
                    doloribus ipsam illum laboriosam rem ut nostrum odio nam.
                  </div>
                  {/* img */}
                  <div className="bg-slate-100 aspect-square w-full h-96 rounded-xl mt-2"></div>
                  <div className="flex items-center justify-start space-x-20 mt-4 w-full">
                    <div className="rounded-full hover:bg-white/20 cursor-pointer p-2 transition duration-200">
                      <BsChat />
                    </div>
                    <div className="rounded-full hover:bg-white/10 cursor-pointer p-2 transition duration-200">
                      <AiOutlineRetweet />
                    </div>
                    <div className="rounded-full hover:bg-white/10 cursor-pointer p-2 transition duration-200">
                      <AiOutlineHeart />
                    </div>
                    <div className="rounded-full hover:bg-white/10 cursor-pointer p-2 transition duration-200">
                      <IoStatsChart />
                    </div>
                    <div className="rounded-full hover:bg-white/10 cursor-pointer p-2 transition duration-200">
                      <IoShareOutline />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
  )
}

export default MainContent