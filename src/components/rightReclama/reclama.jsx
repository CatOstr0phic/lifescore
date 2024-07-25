import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import React from "react";

function Reclama({ image }) {
  return (
    <div className="relative h-[250px] w-full min-w-[250px] p-2">
      <div className="absolute flex items-center justify-center rounded-[50%] bottom-0 mr-4 mb-4 bg-white right-0 w-10 h-10 bg-gray">
        <ArrowForwardIosOutlinedIcon htmlColor="fill-blue-500" />
      </div>
      <div className="h-full cursor-pointer">
        <img src={image} className="h-100 w-100" alt="" />
      </div>
    </div>
  );
}

export default Reclama;
