import React from "react";
import "./header.style.css";
import { BsSearch } from "react-icons/bs";
import { BiGlobe } from "react-icons/bi";
import { IoIosMenu } from "react-icons/io";
import Avatar from "../../assets/Avatar.component";
function Herder() {
  return (
    <div className="header">
      <img
        className="header__icon"
        src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
        alt=""
      ></img>
      <div className="header__search">
        <p>
          <strong>Anywhere</strong>
        </p>
        <hr></hr>
        <p>
          <strong>Any week </strong>
        </p>

        <input type="text" placeholder="Add guests" />
        <BsSearch className="search_icon" />
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <BiGlobe />
        <div className="header__avatar-container">
          <IoIosMenu />
          <Avatar />
        </div>
      </div>
    </div>
  );
}

export default Herder;
