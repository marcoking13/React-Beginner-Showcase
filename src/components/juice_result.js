import React from "react";


const JuiceResult = (props) => {

  console.log("Juice Result: "+props.juice + " Fruit Result: "+props.fruits);


  return(
    <div className= "juiceResultContainer bord">
      <h2 className="title2">Smoothie is Ready</h2>
      <div className="visualContainer">
        <img src="./../../assets/images/smoothie.png"className="smoothiePic"/>
        <h3 className="smoothieName">Smoothie Name</h3>
      </div>
      <div className="nutritionBox bord">
        <h3 className="detailsJuice">Calories:</h3>
        <h3 className="detailsJuice">Sugar:</h3>
        <h3 className="detailsJuice">Ingredients:</h3>

      </div>
      <div className = "vitaminBox bord">
        <h3 className="detailsJuice title2">Vitamins:</h3>
      </div>
    </div>

  );

}

export default JuiceResult;
