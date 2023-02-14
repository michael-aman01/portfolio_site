import React from "react";
import "./about.css"
import Navigation from "../Navbar";
import { Container, Nav, Navbar } from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Linkedin from "./linkedin.png"
import photo from "./photo.jpeg"
export default function About(){
    
    return (
        <>
       <Navigation></Navigation>

       <div id="about-container">
          
          <div className='about-header'>
              about
          </div>
      
          <div className='about-info-container'>
            <div id="about-photo">
                <img height={"350px"} src={photo}></img>
            </div>
            <div id="about-text">
                <p>
  I am a full-stack software developer that is well versed in JavaScript, React, Redux, Ruby, Rails, CSS, HTML5, SQL, Postgres DB, MongoDB, ExpressJS, and Python. 

            I am currently looking for new opportunities as a Software Engineer that will allow me to leverage my knowledge and skills in a challenging and collaborative environment. My past experiences have afforded me the versatility to become a valued team member in any industry, so I am open to learning about any positions you have to offer. 

                </p>
          
            <p>
            Please feel free to reach out to me regarding any available positions at the following email: <span style={{"color":"red","textDecoration":"underline", "cursor":"pointer"}}>michael_aman92@icloud.com</span>


            </p>
            <br></br>
            <p>            I look forward to hearing from you!</p>
            </div>
          </div>

      </div>




        </>
    )
}