import './projectsindex.css'
import React, { useEffect } from 'react'
import Navigation from '../Navbar'
import MyBNB from './mybnb_cropped.jpg'
import Keywi from './keywi_cropped.jpg'
import stock from './stock_cropped.jpg'
import ParticlesBackground from "../ParticlesBackground";
export default function ProjectsIndex(){
    const siteLinks = {
        "keywi":"https://keywi.onrender.com",
        "mybnb":"https://mybnb.onrender.com",
        "stock":"https://michael-aman01.github.io/StockScreenerJS/"
    }
    const handleSiteClick = e => {
        e.preventDefault()
        window.open(siteLinks[e.target.id],"_blank")
    }
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
          
                <div className='grid-header'>
                    Projects
                </div>
            
                <div className='grid-container'>
          
                <div className='project-item' id="keywi" >
                        <img height="350px" src={Keywi}></img>
                        <div  className='project-text'>
                            <div className='app-description'>
                                <p>KeyWi</p>
                                <p className='app-details'>
                                ReactJS and MongoDB/ExpressJS
                                </p>
                            </div>
                            <br></br>
                            <button className="project-item-button"  id="keywi" onClick={handleSiteClick}>
                                visit site
                            </button>
                        </div>
     
                    </div>
                    <div className='project-item' id="mybnb">
                        <img  height="350px" src={MyBNB} ></img>
                        <div  className='project-text'>
                        <div className='app-description'>
                                <p>MyBNB</p>
                                <p className='app-details'>
                                ReactJS and Rails 5/PostgreSQL
                                </p>
                            </div>
                            <br></br>
                            <button className="project-item-button" id="mybnb" onClick={handleSiteClick}>visit site</button>
                        </div>
     
                    </div>
             
                    <div className='project-item' id="stock">
                        <img  height="350px" src={stock} id="stock-img"></img>
                        <div  className='project-text'>
                        <div className='app-description'>
                                <p>StockPickerJS</p>
                                <p className='app-details'>
                                JavaScript/ChartJS
                                </p>
                            </div>
                            <br></br>
                            <button className="project-item-button" id="stock" onClick={handleSiteClick}>visit site</button>
                        </div>
     

                    </div>
                </div>
            </div>
        </>
    )
}