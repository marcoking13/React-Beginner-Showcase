import React, {Component} from "react";


const BowserNav = ()=>{

return(

<div className = "row">
  <div className = "col-xs-12 bowserNavContainer">
    <div className = "lefty">
      <img src="./../../assets/images/bowIcon.png"className="bowIcon"/>
      <h3 className = "navName"><strong>Bowser</strong></h3>
    </div>
    <div className = "righty">
      <ul className = "navList">
        <li className = "navLink">
          <a href="http://google.com"> Koopalings </a>
        </li>
        <li className = "navLink">
        <a href="http://google.com">  Contact  </a>
        </li>

      </ul>
      <button className = "btn btn-success logout">Logout</button>


    </div>

  </div>
</div>


);




}



export default BowserNav;
