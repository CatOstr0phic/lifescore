import React from "react";
import NavigationMenu from "../Menu/navigationMenu";
export default function Calendar() {
  return (
    <div className="col-span-6 row-span-5 md:col-span-4 md:row-span-5 md:col-start-3 w-full lg:w-[550px]">
      <NavigationMenu />
      <div className=" border-1 border-slate-800 w-full rounded-lg h-[400px] ">
        <div className="flex gap-4 border-b items-center px-3 h-14 border-slate-800">
          <span className="hover:text-orange-600 cursor-pointer transiton ease-in-out hover:scale-110">
            Matches
          </span>
          <span className="hover:text-orange-600 cursor-pointer transiton ease-in-out hover:scale-110">
            Competitions
          </span>
          <span className="hover:text-orange-600 cursor-pointer transiton ease-in-out hover:scale-110">
            Teams
          </span>
        </div>
        <div className="m-3 border-1  border-slate-800 ">
          <div className="max-w-[300px] p-3 flex flex-col gap-2">
            <h1 className="text-xl text-white">Follow Your Favourites</h1>
            <span className="font-thin">
              Receive instant notifications about the latest fixtures,
              highlights, and news before anyone else.
            </span>

            <button class="rounded-md w-20 text-white my-3 transition ease-in-out delay-150 bg-orange-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-400 duration-300">
              Open
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
