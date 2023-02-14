import './projectsindex.css'
import React from 'react'
import Navigation from '../Navbar'

export default function ProjectsIndex(){
    return (
        <>
         <Navigation></Navigation>
            <div id="projects-container">
                <div className='grid-header'>projects</div>
                <div className='grid-container'>
                    <div className='project-item'>p1</div>
                    <div className='project-item'>p1</div>
                    <div className='project-item'>p1</div>
                </div>
            </div>
        </>
    )
}