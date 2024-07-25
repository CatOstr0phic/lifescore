import React from "react";
import { FolderCopyOutlined } from "@mui/icons-material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
export default function SidebarList() {
  return (
    <>
      <div className="hidden md:block col-span-2 row-span-5">
        <div className="hidden border-slate-800 rounded-md border-[0.1px] sm:block">
          <div className="md:flex items-center h-14 border-b border-slate-800 ml-2 hidden w-[200px]">
            <SearchOutlinedIcon />
            <input
              type="text"
              placeholder="Search..."
              className="outline-0 h-full bg-transparent ml-2"
            />
          </div>
          <ul className="p-2 font-light">
            <li className="py-2 text-gray-200 cursor-pointer">
              <FolderCopyOutlined />
              <span className="ml-2 ">Women's World Cup</span>
            </li>

            <li className="py-2 text-gray-200 cursor-pointer">
              <FolderCopyOutlined />
              <span className="ml-2 ">England</span>
            </li>
            <li className="py-2 text-gray-200 cursor-pointer">
              <FolderCopyOutlined />
              <span className="ml-2 ">Spain</span>
            </li>
            <li className="py-2 text-gray-200 cursor-pointer">
              <FolderCopyOutlined />
              <span className="ml-2 ">Italy</span>
            </li>
            <li className="py-2 text-gray-200 cursor-pointer">
              <FolderCopyOutlined />
              <span className="ml-2 ">Germany</span>
            </li>
            <li className="py-2 text-gray-200 cursor-pointer">
              <FolderCopyOutlined />
              <span className="ml-2 ">France</span>
            </li>
            <li className="py-2 text-gray-200 cursor-pointer">
              <FolderCopyOutlined />
              <span className="ml-2 ">Netherlands</span>
            </li>

            <li className="py-2 text-gray-200 cursor-pointer">
              <FolderCopyOutlined />
              <span className="ml-2 ">Scotland</span>
            </li>
            <li className="py-2 text-gray-200 cursor-pointer">
              <FolderCopyOutlined />
              <span className="ml-2 ">Turkiye</span>
            </li>
            <li className="py-2 text-gray-200 cursor-pointer">
              <FolderCopyOutlined />
              <span className="ml-2 ">Champions League</span>
            </li>

            <li className="py-2 text-gray-200 cursor-pointer">
              <FolderCopyOutlined />
              <span className="ml-2 ">Europe League</span>
            </li>
            <li className="py-2 text-gray-200 cursor-pointer">
              <FolderCopyOutlined />
              <span className="ml-2 ">International</span>
            </li>
            <li className="py-2 text-gray-200 cursor-pointer">
              <FolderCopyOutlined />
              <span className="ml-2 ">Euro 2021</span>
            </li>

            <li className="py-2 text-gray-200 cursor-pointer">
              <FolderCopyOutlined />
              <span className="ml-2 ">Club Friendless</span>
            </li>
            <li className="py-2 text-gray-200 cursor-pointer">
              <FolderCopyOutlined />
              <span className="ml-2 ">World Cup</span>
            </li>
            <li className="py-2 text-gray-200 cursor-pointer">
              <FolderCopyOutlined />
              <span className="ml-2 ">World Cup 2022</span>
            </li>

            <li className="py-2 text-gray-200 cursor-pointer">
              <FolderCopyOutlined />
              <span className="ml-2 ">Women's Euro</span>
            </li>
            <li className="py-2 text-gray-200 cursor-pointer">
              <FolderCopyOutlined />
              <span className="ml-2 ">World Cup U20</span>
            </li>
            <li className="py-2 cursor-pointer">
              <FolderCopyOutlined />
              <span className="ml-2 ">Euro U21 2025</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
