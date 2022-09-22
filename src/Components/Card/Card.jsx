import React from 'react';
import './Card.css'
export default function Card({emoji,heading,detail,year,marks,sheet}) {
  return (
   <div className="card">
    <img src={emoji} alt="image not found"/>
    <span>{heading}</span>
    <span>{detail}</span>
    <span>{year}</span>
    <span>{marks}</span>
    <button className="c-button"><a href={sheet} target="blank">Learn more</a></button>
   </div>
  );
}
