import React from "react";
import CreatureItem from "./creature_item.js";
import CreatureStats from "./creature_stats.js";

class  CreatureBox extends React.Component{
  constructor(props){
    super(props);
    this.state = { creature: [
      {
      name: "Koopa",
      health:12,
      attack:3,
      defense:1,
      moves:"Shell Shock",
      image: "./../../assets/images/koopa.png",
        bio:"Info on creature example"
    },
    {
    name: "Boo",
    health:9,
    attack:4,
    defense:0,
    moves:"Boo!",
      image: "./../../assets/images/boo.png",
        bio:"Info on creature example"
  },
  {
  name: "Bomb-Omb",
  health:3,
  attack:5,
  defense:2,
  moves:"Bombs Away",
    image: "./../../assets/images/bomb.png",
    bio:"Info on creature example"
}



],

selectedCreature : {}


}

  }



  render(){
    const flows = this.state.creature.map((roll)=>{
    return(
     <CreatureItem
        bowser = {roll}
        key={roll.name}
        onSelectedCreature = {chosenCreature => this.setState({selectedCreature:chosenCreature})}
        tester={this.state.selectedCreature}

      />

    )
  });

    return(
      <div className = "bowserBox">
    <div className = "row">
    <div className = "col-xs-1"></div>
      <div className = "col-xs-10 jumbotron minions">
        {flows}
    </div>
    </div>
    <CreatureStats stats = {this.state.selectedCreature}/>
    </div>
  );
  }
}



export default CreatureBox;
