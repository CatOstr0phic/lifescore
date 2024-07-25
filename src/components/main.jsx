import React from "react";
import Calendar from "./Calendar/calendar";
import SidebarList from "./Sidebar/sidebarList";
import Reclama from "./rightReclama/reclama";

export default function Main() {
  return (
    <div className="px-2 py-4 w-full">
      {/* <div className="block justify-center md:flex md:justify-between">
        <div className="w-[100%]">
          <div className="flex w-full gap-1">
            <div className="hidden border-slate-800 rounded-md border-[0.1px] md:block">
          
            </div>
            <div>
              <NavigationMenu />
              <div className="border-1 border-slate-800 rounded-lg h-[400px]">
                <Calendar />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-100 hidden md:block" >
          <Reclama />
        </div>
      </div> */}

<div className="block md:flex justify-center gap-1">
  <div className="grid grid-cols-6 grid-rows-5 gap-4 md:flex justify-center w-100">
    <SidebarList />
    <Calendar />
  </div>
  <div className="hidden w-full lg:block">
    <Reclama image="./assets/sport01.jpg"/>
  </div>
</div>


    </div>
  );
}
