import React from "react";
import { useState, useEffect } from "react";
import downArrow from "./downArrow.svg"
import rightArrow from "./rightArrow.svg"
import Icon from '@mdi/react';
import { useHistory } from "react-router-dom";

import { mdiAccount, mdiArrowRightBoldOutline} from '@mdi/js';
export default function Splash(){
    const history = useHistory()
    const [arrow,setArrow] = useState(0)
    const [buttonColor, setButtonColor] = useState("red")
 
    useEffect(() => {
     let color = buttonColor === "transparent" ? "red" : "transparent"
     setButtonColor(color)
     document.getElementById("work-button").style.backgroundColor = color
    },[arrow])

    const handleContentChange = e => {
        history.push("/projects")
    }

    return (
        <>
            <div id="info-container">
                    <div id="message-container">
                        <div id="message-1">Hello, I am <span id="name-container">Michael Aman</span></div>
                       <div id="message-2">I'm a full-stack web developer.</div>
                    </div>    
            </div>
            <button  id="work-button"  onClick={handleContentChange}  onMouseEnter={() => setArrow(90)} onMouseLeave={() => setArrow(0)}>
                    Projects
 
                    
              
                    <Icon  id="arrow" path={mdiArrowRightBoldOutline} size={1} rotate={arrow}/>
              
                
            </button>
        </>
    )
}