import React from "react";


const JuiceCounter = (props) =>{

  return(
    <div>
    <div className="fruit">
      <h3 className="counterFruit juiceTitle2">Strawberry:{props.counter1}</h3>
    </div>
    <div className="fruit">
      <h3 className="counterFruit juiceTitle2">Bananna:{props.counter2}</h3>
    </div>
    <div className="fruit">
      <h3 className="counterFruit juiceTitle2">Apple:{props.counter3}</h3>
    </div>

  
  </div>
  )


}


export default JuiceCounter;
