import React from "react";
import header from "../images/badge_header.svg";
import "./styles/Hero.css";
class Hero extends React.Component {
  render() {
    return (
      <div className="BadgeNew__hero">
        <img className="img-fluid" src={header} alt="header"></img>
      </div>
    );
  }
}

export default Hero;
