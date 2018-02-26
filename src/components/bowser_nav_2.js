import React from "react";

const BowserNav2 = (props) => {

return (
  <div className= "row"id="bowserPort">
    <div className ="rightWing col-xs-3">
      <img className = "bowserProfPort"src="./../../assets/images/lion.jpg"/>
      <h3 className="portTitle">React Portfolio Level 1 </h3>
    </div>
      <div className = "col-xs-3 rightWingE">

      </div>
      <div className = "col-xs-3"></div>
      <div className = "col-xs-3 leftWing">
      <a href="http://google.com"className="linkers">About</a>
        <a href="http://google.com"className="linkers">Contact</a>
        <button className = "btn btn-danger logout">Logout</button>
      </div>
  </div>

);
}


export default BowserNav2;
