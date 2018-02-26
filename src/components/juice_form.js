import React from "react";

import JuiceCounter from "./juice_counter.js";
var counter1 =0;
var counter2 = 0;
var counter3 = 0;
const fruitList = [];




const JuiceForm =(props)=>{

  const juiceSubmitter = () => {
      var chosenLiquid = document.querySelector(".juiceInput").value;
      console.log(chosenLiquid);
      console.log(props.onFruitSubmit);
      console.log(props.onJuiceSubmit);
      props.onFruitSubmit(fruitList);
      props.onJuiceSubmit(chosenLiquid);
  }



  return(
    <div className="fruitContainer">
      <div className="fruitRow">
          <img src="./../../assets/images/strawberry.png"className="fruit"id="strawberry"onClick = {(event)=>{

            var selectedFruit = event.target.id;
            fruitList.push(selectedFruit);
            console.log(fruitList);
            counter1=0;
            counter2=0;
            counter3=0;
            for(var i=0; i<fruitList.length;i++){

                console.log(fruitList[i]);
              switch(fruitList[i]){

                case "strawberry":counter1++;
                break;

                case "banana": counter2++;
                break;


                case "apples": counter3++;
                break;

              }
            }
              console.log("Strawberry Counter:"+counter1+" Banana Counter:"+counter2+" Apple Counter:"+counter3);


        }}







        />
          <img src="./../../assets/images/banana.png"className="fruit"id="banana" onClick = {(event)=>{

            var selectedFruit = event.target.id;
            fruitList.push(selectedFruit);
            console.log(fruitList);
            counter1=0;
            counter2=0;
            counter3=0;
            for(var i=0; i<fruitList.length;i++){

                console.log(fruitList[i]);
              switch(fruitList[i]){

                case "strawberry":counter1++;
                break;

                case "banana": counter2++;
                break;


                case "apples": counter3++;
                break;

              }
            }
              console.log("Strawberry Counter:"+counter1+" Banana Counter:"+counter2+" Apple Counter:"+counter3);
        }}/>
        <img src="./../../assets/images/apple.png"className="fruit"id="apple"onClick = {(event)=>{

            var selectedFruit = event.target.id;
            fruitList.push(selectedFruit);
            console.log(fruitList);
            counter1=0;
            counter2=0;
            counter3=0;
            for(var i=0; i<fruitList.length;i++){

                console.log(fruitList[i]);
              switch(fruitList[i]){

                case "strawberry":counter1++;
                break;

                case "banana": counter2++;
                break;


                case "apple": counter3++;
                break;

              }
            }
            console.log("Strawberry Counter:"+counter1+" Banana Counter:"+counter2+" Apple Counter:"+counter3);
        }}/>
      </div>

    <div className="fruitRow">

      <JuiceCounter counter1 = {counter1}  counter2 = {counter2}  counter3 = {counter3} />

      </div>

    <div className="fruitRow">

      <select className="form-control juiceInput">
        <option>Almond Milk</option>
        <option>Orange Juice</option>
      </select>

    </div>
    <div className="fruitRow">
      <button className="btn btn-primary submitFruit"onClick = {()=>{juiceSubmitter()}}>Make Smoothie </button>

    </div>
</div>
      );
}

export default JuiceForm;
