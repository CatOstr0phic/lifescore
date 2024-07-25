import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";

function Container({ children }) {
    const expand = useMediaQuery('(max-width: 1024px)')
    const style = `w-[100%] ${expand ? 'px-0' : 'px-36'}`
  return <div className={style}>{children}</div>;
}
export default Container;
