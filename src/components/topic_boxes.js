import React from "react";


const TopicBoxes = (props) => {
  const topicData = props.topic;
  const topicTitle = props.topic.topic
  
  return (
    <div className="example"id={props.topic.rank}>


      <h3 className = "topicUnit">{topicTitle}</h3>

      </div>
    );
}






export default TopicBoxes;
