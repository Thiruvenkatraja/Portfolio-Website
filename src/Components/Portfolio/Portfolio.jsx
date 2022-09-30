import React from 'react';
import "./Portfolio.css";
import {Swiper,SwiperSlide} from 'swiper/react'
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import 'swiper/css';
import {themeContext} from '../../Context'; 
import {useContext} from 'react';
export default function Portfolio() {
  const theme=useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='portfolio' id='Projects'>


     <span style={{color:darkMode?'white':''}}>Recent Projects</span>
     <span>Portfolio</span>
     <Swiper
     spaceBetween={40}
     slidesPerView={3}
     grabCursor={true}
      className='portfolio-slider'>
        <SwiperSlide>
            <a href='https://insta-clone-ywoq.vercel.app/' target='blank'><img src={Sidebar} alt="img not found" /></a>
        </SwiperSlide>
        <SwiperSlide>
            <a href="https://tomoto-restaurant-835a.vercel.app/" target='blank'><img src={Ecommerce} alt="img not found" /></a>
        </SwiperSlide>
        <SwiperSlide>
            <a href="https://portfolio-website-rho-pied.vercel.app/" target='blank'><img src={MusicApp} alt="img not found" /></a>
        </SwiperSlide>
        <SwiperSlide>
           <a href="#"> <img src={HOC} alt="img not found" /></a>
        </SwiperSlide>

     </Swiper>
    </div>
  );
}
