import React from "react";
import "./Navbar.css";
import "../../App.css";
import Toggle from "../../Components/Toggle/Toggle";
import { Link } from "react-scroll";
import { useState } from "react";
// import {FaTimes, FaBars} from 'react-icons/fa';
const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">
          <h1 className="profile-name">Venkadesh</h1>
        </div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link
              spy={true}
              to="Education"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Education</li>
            </Link>
            <Link
              spy={true}
              to="Experience"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Experience</li>
            </Link>
            <Link
              spy={true}
              to="Projects"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Projects</li>
            </Link>
            <Link
              spy={true}
              to="Testimonials"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Testimonials</li>
            </Link>
          </ul>
          <div className="nav-icons" onClick={handleClick}>
            <i
              className={click ? " button fas fa-times" : " button fas fa-bars"}
            ></i>
          </div>
        </div>

        <Link spy={true} to="Contact" smooth={true} activeClass="activeClass">
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
