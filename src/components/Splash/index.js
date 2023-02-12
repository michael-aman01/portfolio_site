import React from "react";
import { useState, useEffect } from "react";
import downArrow from "./downArrow.svg"
import rightArrow from "./rightArrow.svg"
export default function Splash(){
    const [arrow,setArrow] = useState(rightArrow)
    const [buttonColor, setButtonColor] = useState("red")
 
    useEffect(() => {
     let color = buttonColor === "transparent" ? "red" : "transparent"
     setButtonColor(color)
     document.getElementById("work-button").style.backgroundColor = color
    },[arrow])

    const handleContentChange = e => {
        let content = document.getElementById("/splash")
        console.log(content)
    }

    return (
        <>
            <div id="info-container">
                    <div id="message-container">
                        <div>Hello, I am <span id="name-container">Michael Aman</span></div>
                       <div>I'm a full-stack web developer.</div>
                    </div>    
            </div>
            <div id="work-button"  onClick={handleContentChange}  onMouseEnter={() => arrow === downArrow ? setArrow(rightArrow) : setArrow(downArrow)} onMouseLeave={() => arrow === downArrow ? setArrow(rightArrow) : setArrow(downArrow)}>
                    <div>projects</div>
                    <div >
                    <img style={{"height":"100%"}} src={arrow}></img>
                    </div>
                
            </div>
        </>
    )
}