import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilepic1 from "../../img/profile1.jpg";
import profilepic2 from "../../img/profile2.jpg";
import profilepic3 from "../../img/profile3.jpg";
import profilepic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
export default function Testimonial() {
  const clients = [
    {
      img: profilepic1,
      review:
        "There are two ways to live your life,One is as though nothing is miracle,The other is as though everything is a miracle",
    },
    {
      img: profilepic2,
      review:
        "If you're trying to create a company, it's like baking a cake. You have to have all the ingredients in the right proportion.",
    },
    {
      img: profilepic3,
      review:
        "You have to grow from the inside out. None can teach you, none can make you spiritual. There is no other teacher but your own soul.",
    },
    {
      img: profilepic4,
      review:
        "Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work.",
    },
  ];
  return (
    <div className="t-wrapper" id='Testimonials'>
      <div className="t-heading">
        <span>I follow their quotes </span>
        <span>To reach my goal </span>
        <span>In my life...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "orange" }}></div>
      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="image not found" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
