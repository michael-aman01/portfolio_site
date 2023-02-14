import React, { useEffect } from "react";
import ParticlesBackground from "../ParticlesBackground";
import Splash from "../Splash";
import About from "../About";
import {useState} from "react"

export default function IndexPage(){
    const [content,setContent] = useState("/splash")

    const sections = {
        "/splash" : <Splash/>,
        "/about": <About/>

    }


    return (
        <>
        <ParticlesBackground></ParticlesBackground>
            <div id={content} >

                {sections[content]}
        
            </div>
        </>
    )
}