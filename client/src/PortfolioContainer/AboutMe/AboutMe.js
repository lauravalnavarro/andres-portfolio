import React from 'react'
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading"
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import "./AboutMe.css"


export default function AboutMe(props) {
    let fadeInScreenHandler=(screen)=> {
        if (screen.fadeInScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    const SCREEN_CONSTSANTS = {
        description: "Web Developer with knowledge in Front End with React and Back End with Node.js, along with an ability to build applications with maximum efficiency. Strong technology enthusiast with a strong desire to learn and expand my experiences.",
        highlights:{
            bullets: [
                " Full Stack web developer",
                " Js, Css and Html proficiency",
                " Front End with React",
                " Back End with Node.js",
                " Api's domain",
                " Mastery of libraries such as Bootstrap, among others.",
                " Responsibility",
                " Good teamwork",
            ],
            heading: "Here are a few highlights:",
        } 
    }
    
    const renderHighlight = () => {
        return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
          <div className="highlight" key={i}>
            <div className="highlight-blob"></div>
            <span>{value}</span>
          </div>
        ));
      };


    return (
        <div className="about-me-container screen-container "
         id={props.id || ""}
         >
            <div className="about-me-parent">
                <ScreenHeading title={"About Me"} subHeading={"Why Choose Me"}/>
                <div className="about-me-card">
                    <div className="about-me-profile">
                    </div>
                    <div className="about-me-details">
                        <div className="highlights-heading">
                            <span>Me:</span>
                        </div>   
                        <span className="about-me-description">{SCREEN_CONSTSANTS.description}</span>
                        <div className="about-me-highlights">
                            <div className="highlights-heading">
                                 <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
                            </div>
                            {renderHighlight()}
                        </div>
                        <div className="about-me-options">

                        <button 
                        onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                        className="btn primary-btn">{""}Nex section{" "}</button>

                        <a href= 'Andres Rodriguez.pdf' download='Andres Rodriguez.pdf'>
                             <button className="btn highlighted-btn">Get resume</button>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
