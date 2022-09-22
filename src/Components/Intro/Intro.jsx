import React from "react";
import Typical from "react-typical";
import "./Intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../Floatingdiv/FloatingDiv";
import {themeContext} from '../../Context'; 
import {useContext} from 'react';
import { motion } from 'framer-motion'; 
import { Link } from "react-scroll";
export default function Intro() {
  const transition={duration:2 , type:'spring'}
  const theme=useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{color:darkMode?'white':''}}> Hi !  I'm </span>
          <span>Venkadesh T</span>
          <span>
             <h1 style={{color:darkMode?'white':''}}>
              <Typical
                loop={Infinity}
                steps={[
                  "🔴Full Stack Dev🔴 ",
                  1000,
                  "🟠MERN Stack Dev🟠",
                  1000,
                  "🟡React Developer🟡",
                  1000,
                  "🟢JS Developer🟢",
                  1000,
                  "🔵Web Developer🔵",
                  1000,
                ]}
              />
            </h1> 
          </span>
        </div>
        <div className="buttons">
        <Link spy={true} to='Contact' smooth={true} activeClass='activeClass' >
          <button className="button i-button">Hire ME</button></Link>
          <a href="RESUMEVENKAT.pdf" download="Venkadesh RESUMEVENKAT.pdf">
            <button className="button highlighted-btn">Get MY CV</button>
          </a>
        </div>
        <div className="i-icons">
          <a href="https://github.com/Thiruvenkatraja" target="blank">
            <img src={Github} alt="image not found" />
          </a>
          <a
            href="https://www.linkedin.com/in/venkadesh-t-7b3a79223/"
            target="blank"
          >
            <img src={Linkedin} alt="image not found" />
          </a>
          <a
            href="https://www.instagram.com/interesting_idiot_tvr/?hl=en"
            target="blank"
          >
            <img src={Instagram} alt="image not found" />
          </a>
        </div>
      </div>
     
      <div className="i-right">
        <img src={Vector1} alt="image not found" />
        <img src={Vector2} alt="image not found" />
        <img src={boy} alt="image not found" />
        <motion.img
        intial={{left:'-20%'}}
        whileInView={{left:'-18%'}}
        transition={transition}
         src={glassesimoji} alt="Image not found"  />
        <motion.div
         initial={{top:'-4%', left:'74%'}}
         whileInView={{left:'68%'}}
         transition={transition}
        style={{ top: "-4%", left: "68%" }}
         className="floating-div">
        <FloatingDiv image={crown} txt1="Web" txt2="Developer" />
      </motion.div>
      <motion.div
         initial={{top:'18rem', left:'5rem'}}
         whileInView={{left:'0rem'}}
         transition={transition} 
         style={{ top: "18rem", left: "0rem" }}
         className="floating-div">
        <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
      </motion.div>
      <div className="blur" style={{background: "rgb(238,210,255)"}}>
        <div className="blur" style={{background:'#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-23rem'}}></div>

      </div>
      </div>
     
    </div>
  );
};
