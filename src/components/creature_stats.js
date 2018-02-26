import React from "react";

const CreatureStats = (props) => {
  const Stats = props.stats;
console.log(Stats);

  return (
    <div className = "row noBorder creatureStats ghost">
      <div className = "col-xs-1"></div>
      <div className = "col-xs-10 sss">
      <div className = "titleContainer">
        <h2 className = "statTitle"> {Stats.name}</h2>
        </div>
        <div className = "statImageContainer">
          <img src={Stats.image} className="statImage"/>
        </div>

        <div className="statInfoContainer">
          <h3 className="titleS">Stats</h3>
          <h4 className="detail">Health: {Stats.health}</h4>
          <h4 className="detail">Defense: {Stats.defense}</h4>
          <h4 className="detail">Attack: {Stats.attack}</h4>
          <h4 className="detail">Moves: {Stats.moves}</h4>
        </div>

        <div className = "statBioContainer">
            <h3 className="titleD">Details</h3>
          <h3 className="bioTitle">{Stats.bio}</h3>
        </div>
      </div>
    </div>
  )

}

export default CreatureStats;
