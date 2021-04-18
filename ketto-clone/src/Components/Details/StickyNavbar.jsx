import React from "react";
import { Navelements} from "./stickynav";
import  "./StickyNavbar.css"
const StickyNavBar = ({ scrolling }) => {
  const [but,setBut] = React.useState(1);
  let handleClick =(num)=>{
    console.log('button pressed')
     setBut(num);
  }
  console.log(scrolling);
  return (
    <div className={scrolling ? "navbar sticky" : "navbar"} id="navbar">
    <Navelements but={but} handleClick={handleClick}/>
    </div>
  );
};

export default StickyNavBar;
