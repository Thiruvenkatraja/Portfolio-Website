import React from 'react';
import './Footer.css';
import Wave from '../../img/wave.png'
import Google from '@iconscout/react-unicons/icons/uil-google'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
export default function Footer() {
  return (
   <div className='footer'>
     <img src={Wave} alt="image not found" style={{width:'100%'}}/>
     <div className="f-content">
        <span className='f-top'>Venkat.tv.raja@gmail.com</span>
        
        <div className="f-icons">
            <Google size='3rem' color='white'/>
            <Github size='3rem' color='white'/>
            <Linkedin size='3rem' color='white'/>
        </div>
        <span className='f-end'>--copyrights under TVR corporation--</span>
     </div>
     
   </div>
  );
}
