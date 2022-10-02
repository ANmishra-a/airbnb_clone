import React, { useState } from "react";
import "./Card.style.css";
import { AiTwotoneStar } from "react-icons/Ai";
import Slider from "../Slider/Slider";
function Card(props) {
  return (
    <div className="card__container">
      <div className="child">
        {" "}
        <Slider root={props.root} />
        <div className="child__info">
          <div className="child__info-right">
            <p>
              <strong>{props.name}</strong>
            </p>
            <info>{props.distance}kilometers</info>
            <info>{props.date}</info>
            <info>
              <strong>₹{props.price}</strong> night
            </info>
          </div>
          <div className="child__info-left">
            <AiTwotoneStar />
            <info>{props.rating}</info>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
