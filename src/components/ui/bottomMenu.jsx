import React from "react";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import NewspaperIcon from "@mui/icons-material/Newspaper";


export default function bottomMenu() {
  return (
    <div className='block z-[1] fixed justify-self-center bottom-0 w-full h-16 bg-yellow-800 md:hidden'>
         <ul className="flex h-100 items-center justify-around">
            <li className="flex flex-col items-center hover:text-orange-600 cursor-pointer md:hidden">
              <SportsSoccerIcon />
              <span>Scores</span>
            </li>
            <li className="flex flex-col items-center hover:text-orange-600 cursor-pointer md:hidden">
              <StarBorderIcon />
              <span>Favuorites</span>
            </li>
            <li className="flex flex-col items-center hover:text-orange-600 cursor-pointer md:hidden">
              <NewspaperIcon className="stroke-1 text-base"/>
              <span>News</span>
            </li>
          </ul>
    </div>
  )
}

 
