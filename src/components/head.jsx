import React, { useState } from "react";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SystemUpdateIcon from "@mui/icons-material/SystemUpdate";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import DehazeIcon from "@mui/icons-material/Dehaze";
import Container from "../Layout/Container";
import Banner from "./Banner/banner";
import { Backdrop } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export default function Head() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e) => {
    setIsOpen(true);
  };
  const handleClose = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <div className="relative border-b w-full border-slate-800">
      <div className="hidden w-100 h-28 pt-3 items-center justify-center md:flex">
        {" "}
        <Banner />
      </div>
      <Container>
        <div className="flex px-[2%] h-14 text-zinc-400 w-full justify-center items-center rounded-sm">
          <ul className="flex justify-between w-full min-w-100 lg:min-w-[1020px]">
            <ul className="flex flex-row w-full justify-between md:w-[114px]">
              <li>
                <DehazeIcon onClick={handleOpen} />
                <div
                  className={`fixed flex flex-row left-0 top-0 ${
                    isOpen ? "w-70 h-full bg-[#0e0e0e]" : "w-0 hidden"
                  }`}
                >
                  {/* <NavigationBar /> */}
                  <div className="relative w-[250px]  text-[16px] font-semibold h-100 z-50 text-lg text-white p-4">
                    <CloseOutlinedIcon
                      onClick={handleClose}
                      className="absolute right-0 top-[1px] border-b border-l rounded-md  border-slate-500 bg-gray-800 w-[20px] p-1 cursor-pointor"
                    />
                    <h1 className="p-1 text-2xl font-bold">LiveScore</h1>

                    <ul>
                      <li className="py-2 text-[16px] font-semibold cursor-pointer">
                        <SettingsOutlinedIcon />{" "}
                        <span className="mx-2">What's New</span>
                      </li>
                      <li className="py-2 text-[16px] font-semibold cursor-pointer">
                        <SettingsOutlinedIcon />{" "}
                        <span className="mx-2">FAQ</span>
                      </li>
                      <li className="py-2 text-[16px] font-semibold cursor-pointer">
                        <SettingsOutlinedIcon />{" "}
                        <span className="mx-2">Contact</span>
                      </li>
                      <li className="py-2 text-[16px] font-semibold cursor-pointer">
                        <SettingsOutlinedIcon />{" "}
                        <span className="mx-2">Advertise</span>
                      </li>
                      <li className="py-2 text-[16px] font-semibold cursor-pointer">
                        <SettingsOutlinedIcon />{" "}
                        <span className="mx-2">Mobile</span>
                      </li>
                      <li className="py-2 text-[16px] font-semibold cursor-pointer">
                        <SettingsOutlinedIcon />{" "}
                        <span className="mx-2">Privacy Notice</span>
                      </li>
                    </ul>

                    <div className="bottom-0 absolute pb-4">
                      <div className="flex items-center">
                        <img
                          src="/assets/logo.svg"
                          className="w-[35px]"
                          alt=""
                        />
                        <span className="text-[14px] mx-2 leading-none">
                          Get instant notifications with the LiveScore app
                        </span>
                      </div>
                    </div>
                  </div>
                  <Backdrop
                    className="z-1"
                    sx={{
                      color: "#fff",
                      zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                    open={isOpen}
                    onClick={handleClose}
                  />
                </div>
              </li>
              <li className="px-2">LifeScore</li>
              <li className="block relative md:hidden">
                <ManageSearchIcon/>
              </li>
            </ul>
            <li className="hidden md:flex items-center hover:text-orange-600 cursor-pointer">
              <SportsSoccerIcon />
              <span className="ml-2">Scores</span>
            </li>
            <li className="hidden md:flex items-center hover:text-orange-600 cursor-pointer">
              {" "}
              <StarBorderIcon />
              <span className="ml-2">Favuorites</span>
            </li>
            <li className="hidden md:flex items-center hover:text-orange-600 cursor-pointer">
              <NewspaperIcon className="relative" />
              <span className="relative ml-2">News</span>
            </li>
            <li className="hidden md:flex items-center hover:text-orange-600 cursor-pointer">
              <SystemUpdateIcon />
              <span className="ml-2">Get the app</span>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
