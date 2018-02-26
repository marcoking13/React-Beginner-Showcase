import React from "react";

const CreatureItem = (props) => {

  const creatureData = props.bowser;

  return (
    <div
    className = "creatureContainer"
    key={props.bowser.name}
    onClick = {()=>{props.onSelectedCreature(creatureData)
        document.querySelector(".creatureStats").classList.remove("ghost");
        document.querySelector(".creatureStats").classList.add("material");

    }}
      >
      <img src={props.bowser.image}className="creatureImage koopa"/>
      <h3 className="creatureName">{props.bowser.name}</h3>
    </div>
  )
}

export default CreatureItem;
