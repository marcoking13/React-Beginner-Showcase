import React from "react";
import JuiceForm from "./juice_form";
import JuiceResult from "./juice_result.js";
class JuiceBox extends React.Component{

constructor(props){
  super(props);
  this.state = {
    fruit: [],
    totalFruit: {},
    juice:null,
    fruitResult:{}
  }

}
render(){
  console.log(this.state.juice +" Fruits:"+this.state.fruit);
  return(
    <div className = "row juiceBox">
      <div className="col-xs-1"></div>
      <div className="col-xs-5 juiceForm jumbotron">
        <h3 className="juiceTitle">Make Smoothie</h3>
        <JuiceForm  onFruitSubmit = {fruitData => this.setState({
          fruit:fruitData
        })}
        onJuiceSubmit = {
          juiceData => this.setState({
            juice:juiceData
          })}

        />
      </div>
      <div className="col-xs-5 juiceResult jumbotron">
        <JuiceResult juice = {this.state.juice} fruits = {this.state.fruit} />
      </div>
    </div>
  );
}

}

export default JuiceBox;
