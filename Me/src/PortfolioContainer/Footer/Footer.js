import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import "./Footer.css"

function Footer() {
    return (
        <div className='firstContainer-Footer'> 

             <div className='secondContainer-name'>
                 <span>~A.F.R.A~ Design.</span>
             </div>
             <div className='thirdContainer-name-space'>
             </div>
             <div className='secondContainer-icons'>
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
    )
}

export default Footer

