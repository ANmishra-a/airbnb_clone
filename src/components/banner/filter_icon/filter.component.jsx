import React from "react";
import "./filter__icon.style.css";
function Filter__icon(prop) {
  return (
    <div className="filter_icon">
      <img src={prop.src}></img>
      <p>{prop.name}</p>
    </div>
  );
}

export default Filter__icon;
