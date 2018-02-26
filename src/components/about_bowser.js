import React from "react";
import SideBowser from "./side_bowser.js";

const AboutBowser = () => {

  return(
    <div className = "row">
      <div className = "col-xs-3"></div>
      <div className = "col-xs-6 jumbotron about">
        <h2 className = "aboutTitle">About Bowser </h2>
        <img className = "bowser"src="./../../assets/images/bowser.png"/>
        <p className = "aboutText">About Text</p>
      </div>
      <div className = "col-xs-3">

    
      </div>
    </div>

  );



}



export default AboutBowser;
