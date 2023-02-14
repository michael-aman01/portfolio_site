import './projectsindex.css'
import React, { useEffect } from 'react'
import Navigation from '../Navbar'
import MyBNB from './mybnb_cropped.jpg'
import Keywi from './keywi_cropped.jpg'
import stock from './stock_cropped.jpg'
import ParticlesBackground from "../ParticlesBackground";
export default function ProjectsIndex(){

    useEffect(() => {

        let delay = setTimeout(() => {
            let tags = Array.from(document.getElementsByClassName("project-item"))
            tags.forEach(tag => {
                tag.setAttribute("class","project-item-entered")
            })
            clearTimeout(delay)
        },2000)


    },[])

    
    const handleProjectEnter = e => {
        e.preventDefault()
        let id = e.target.id.split("-")[0]
      
        let topMessage = document.getElementById(`project-top-message-${id}`)
     
        console.log(topMessage)
   
        let bottomMessage = document.getElementById(`project-bottom-message-${id}`)
        let image = document.getElementById(`${id}-img`)
        console.log(image)
        topMessage.style.display = "block"

        image.style.display = "none"
        let i = 1
        let show = setInterval(() => {

            topMessage.style.height = `${i}%`


            i += 1
            if(i === 10){
                clearInterval(show)
            }
        },100)
    }

    const handleProjectExit = e => {
        e.preventDefault()
        console.log(e.target.id)
        let id_split = e.target.id.split("-")
        let image_id = id_split[id_split.length-1]
        let topMessage = document.getElementById(e.target.id)


        let image = document.getElementById(`${image_id}-img`)
        console.log(image)
        topMessage.style.display = "none"
        topMessage.style.height = "0%"
        image.style.display = "block"
        let i = 1
    }
    return (
        <>
         <Navigation></Navigation>

            <div id="projects-container">
          
                <div className='grid-header'>projects</div>
                <div className='grid-container'>
                <div className='project-item' id="keywi" >
                        <img height="350px" src={Keywi}></img>
                        <div  className='project-text'>
                            <div>
                                KeyWi
                            </div>
                            <br></br>
                            <button className="project-item-button">
                                visit site
                            </button>
                        </div>
     
                    </div>
                    <div className='project-item' id="mybnb">
                        <img  height="350px" src={MyBNB} ></img>
                        <div  className='project-text'>
                            <div>
                                MyBNB
                            </div>
                            <br></br>
                            <button className="project-item-button">visit site</button>
                        </div>
     
                    </div>
             
                    <div className='project-item' id="stock">
                        <img  height="350px" src={stock} id="stock-img"></img>
                        <div  className='project-text'>
                            <div>
                                StockPickerJS
                            </div>
                            <br></br>
                            <button className="project-item-button">visit site</button>
                        </div>
     

                    </div>
                </div>
            </div>
        </>
    )
}