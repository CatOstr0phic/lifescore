import React from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

function NavigationBar() {
  return (
    <div className="relative w-[250px]  text-[16px] font-semibold h-100 z-1000 text-lg text-white p-4">
        <CloseOutlinedIcon className="absolute right-0 top-[1px] border-b border-l rounded-md  border-slate-500 bg-gray-800 w-[20px] p-1 cursor-pointor"/>
      <h1 className="p-1 text-2xl font-bold">LiveScore</h1>

      <ul>
        <li className="py-2 text-[16px] font-semibold cursor-pointer">
          <SettingsOutlinedIcon /> <span className="mx-2">What's New</span>
        </li>
        <li className="py-2 text-[16px] font-semibold cursor-pointer">
          <SettingsOutlinedIcon /> <span className="mx-2">FAQ</span>
        </li>
        <li className="py-2 text-[16px] font-semibold cursor-pointer">
          <SettingsOutlinedIcon /> <span className="mx-2">Contact</span>
        </li>
        <li className="py-2 text-[16px] font-semibold cursor-pointer">
          <SettingsOutlinedIcon /> <span className="mx-2">Advertise</span>
        </li>
        <li className="py-2 text-[16px] font-semibold cursor-pointer">
          <SettingsOutlinedIcon /> <span className="mx-2">Mobile</span>
        </li>
        <li className="py-2 text-[16px] font-semibold cursor-pointer">
          <SettingsOutlinedIcon /> <span className="mx-2">Privacy Notice</span>
        </li>
      </ul>

      <div className="bottom-0 absolute pb-4">
        <div className="flex items-center">
          <img src="/assets/logo.svg" className="w-[35px]" alt="" />
          <span className="text-[14px] mx-2 leading-none">
            Get instant notifications with the LiveScore app
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
