import React from "react";
import header from "../images/platziconf-logo.svg";
import "./styles/Hero.css";
class Hero extends React.Component {
  render() {
    return (
      <div className="BadgeNew__hero">
        <img className="img-class" src={header} alt="header"></img>
      </div>
    );
  }
}

export default Hero;
