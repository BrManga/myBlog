import React from 'react'
import video from "./video1.mp4"
import "./About.css"
function About() {
    return (
        <div className="banner">
        <video autoPlay muted loop className="video">
            <source src={video} type="video/mp4"/>
        </video>
        <h2 className="contactVideo">foreSight</h2>
        </div>
    )
}

export default About
