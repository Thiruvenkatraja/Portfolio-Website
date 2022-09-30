import React from 'react';
import "./Services.css"
import HeartEmoji from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import glassesimoji from "../../img/glassesimoji2.png";
import Card from '../Card/Card';
import {themeContext} from '../../Context'; 
import {useContext} from 'react';
import { motion } from 'framer-motion';


export default function Services() {
   const transition={duration:1, type:'spring'}
   const theme=useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='services' id='Education'>
        {/* leftside */}
        <div className="awesome">
            <span style={{color:darkMode?'white':''}}>My Awesome</span>
            <span>Academics</span>
            <spane> 
                As a student, I proved myself have a good knowledge and skills<br/>
                followed by these results.
                </spane>
                <a href="RESUMEVENKAT.pdf" download="Venkadesh RESUMEVENKAT.pdf">
                    <button className='button s-button'>Download CV</button></a>
                <div className="blur  s-blur1" style={{background:'#ABF1FF94'}}></div>
                </div>
        {/* rightside */}
        <div className="cards">
             <motion.div
             initial={{left:'9rem'}}
             whileInView={{left:'12rem'}}
             transition={transition}
            //   style={{left:"12rem"}}
            >
                <Card
                emoji={HeartEmoji}
                heading={'SSLC'}
                detail={"Mani Matric Higher Sec School"}
                year={"(2014-2015)"}
                marks={"89%"}  
                sheet={'https://drive.google.com/file/d/1rhb-V3xbOV6LRXSSQFcMudV3-OfV8r84/view?usp=sharing'}              
                />
             </motion.div>
             <motion.div
             initial={{left:'9rem'}}
             whileInView={{left:'-4rem',top:'12rem'}}
             transition={transition}
            //   style={{top:'12rem', left:"-4rem"}}
            >
                <Card
                emoji={glasses}
                heading={'HSC'}
                detail={"Mani Matric Higher Sec School"}
                year={"(2016-2017)"}
                marks={"81%"}
                sheet={'https://drive.google.com/file/d/1KpNovrH8K52C6Nsk6lnE4EZuY18btq2n/view?usp=sharing'}                     
                />
             </motion.div>
             <motion.div
             initial={{left:'9rem'}}
             whileInView={{left:'12rem',top:'19rem'}}
             transition={transition}
            //   style={{top:'19rem', left:"12rem"}}
              >
                <Card
                emoji={humble}
                heading={'BE (Mech Eng)'}
                detail={"Jeppiaar Maamallan Eng College"} 
                year={"(2017-2021)"}
                marks={"7.68cgpa"}
                sheet={'https://drive.google.com/file/d/1hxWI2b6d40tSyZfk_Y6vv9JsvH_gPsTc/view?usp=sharing'}                    
                />
             </motion.div>
             <motion.div
              initial={{left:'9rem'}}
              whileInView={{left:'28rem',top:'12rem'}}
              transition={transition} 
            //  style={{top:'12rem', left:"28rem"}}
            >
                <Card
                emoji={glassesimoji}
                heading={'FullStack Dev'}
                detail={"-----Greens Technologys-----"} 
                year={"(July-Sep 2022)"}
                sheet={'#'}                    
                />
             </motion.div>
             <div className="blur s-blur2" style={{background:"var(--purple)"}}></div> 
        </div>
        
    </div>
  );
}
