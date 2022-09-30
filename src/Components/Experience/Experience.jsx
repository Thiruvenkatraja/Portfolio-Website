import React from 'react';
import"./Experience.css";
import {themeContext} from '../../Context'; 
import {useContext} from 'react';


export default function Experience() {
    const theme=useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
   <div className='experience' id='Experience' >
    <div className="achivement">
        <div className="circle">3+</div>
        <span>Months </span>
        <span>Java</span>
        <span>SelfExperience</span>
    </div>
    <div className="achivement">
        <div className="circle">3+</div>
        <span>Months</span>
        <span>Html,Css,Js,ReactJs</span>
        <span>FrontEnd Dev</span>
    </div>
    <div className="achivement">
        <div className="circle">3+</div>
        <span>Months</span>
        <span>Photoshop,Lightroom</span>
        <span>Design</span>
    </div>
   </div>
  );
}
