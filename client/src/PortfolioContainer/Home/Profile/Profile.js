import React from 'react'
import Typical from 'react-typical'
import './Profile.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function Profile() {
    return (
        <div className= 'profile-container'>
              <div className= 'profile-parent'>
                     <div className= 'profile-details'>
                     <div className='profile-details-space'>
                      </div>
                            <div className="profile-details-name">
                                <span className="primary-text">
                                    {"Hello, I´m"}
                                    <span>
                                    {" "}
                                    </span>
                                    <span className="highlighted-tex">
                                    {"ANDRÉS RODRÍGUEZ"}
                                    </span> 
                                </span>
                            </div>
                            <div className="profile-details-role">
                                <span className="primary-tex">
                                    {""}
                                    <h1>
                                        <Typical
                                        loop={Infinity}
                                        steps={[
                                            "Programming Enthusiast 🤓",
                                            1000,
                                            "Full Stack Developer 😎",
                                            1000,
                                            "Multi Skill 🦾💪🏻",
                                            1000,
                                            "Front End with REACT ⚛️",
                                            1000,
                                            "Back End with NODE.js💻",
                                            1001,
                                        ]}
                                      />
                                    </h1>
                                    <span className="profile-role-tagline">
                                    Skills to build and manage web sites with front and back end operations
                                    </span>
                                </span>
                            </div>

                            <div className="profile-options">
                                <a href= "https://api.whatsapp.com/send?phone=573192617199&text=Hola! Andres, acabo de ver tu portafolio y estoy interesado en tu trabajo.">
                                <button className="btn primary-btn">
                                {""}
                                Contact Me by Wpp{" "}
                                </button>
                                </a>
                                <a href= 'Andres Rodriguez.pdf' download='Andres Rodriguez.pdf'>
                                    <button className="btn highlighted-btn">Get resume</button>
                                </a>
                            </div>
                            <div>
                                --------------------------------------
                            </div>
                           <div className= "colz">
                              <div className="colz-icon">
                                <a href= 'https://www.facebook.com/andres.f.rodriguezagudelo'>
                                <FacebookIcon className="colz-icon-facebook"/> 
                                </a>
                                <a href= 'https://www.instagram.com/afr.rorro'>
                                <InstagramIcon className="colz-icon-instagram"/>
                                </a>
                                <a href= 'https://www.linkedin.com/in/And-Rod'>
                                <LinkedInIcon className="colz-icon-linkeding"/>
                                </a> 
                              </div>

                           </div>
                     </div>
                     <div className="profile-picture">
                         <div className="profile-picture-background">
                         </div>
                     </div>
              </div>
        </div>
    )
}

export default Profile;

