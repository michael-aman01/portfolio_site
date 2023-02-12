import React, { useEffect } from "react";
import ParticlesBackground from "../ParticlesBackground";
import downArrow from "./downArrow.svg"
import rightArrow from "./rightArrow.svg"
import { useState } from "react";
export default function IndexPage(){
   const [arrow,setArrow] = useState(rightArrow)
   const [buttonColor, setButtonColor] = useState("red")

   useEffect(() => {
    let color = buttonColor === "transparent" ? "red" : "transparent"
    setButtonColor(color)
    document.getElementById("work-button").style.backgroundColor = color
   },[arrow])
    return (
        <>
            <div>

            <ParticlesBackground></ParticlesBackground>
            <div id="info-container">
                
                    <div id="message-container">
                        <div>Hello, I am <span id="name-container">Michael Aman</span></div>
                       <div>I'm a full-stack web developer.</div>
                    </div>
             
      
             
            </div>
            <div id="work-button"   onMouseEnter={() => arrow === downArrow ? setArrow(rightArrow) : setArrow(downArrow)} onMouseLeave={() => arrow === downArrow ? setArrow(rightArrow) : setArrow(downArrow)}>
                    <div>projects</div>
                    <div >
                    <img style={{"height":"100%"}} src={arrow}></img>
                    </div>
                
            </div>
            </div>
        </>
    )
}