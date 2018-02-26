import React from "react";
import TopicBoxes from "./topic_boxes.js";
import ContactBox from "./contact_box.js";
const TopicContainer = (props) => {

const topicFlow = props.port.map((data)=>{

  return(
    <div className="col-xs-3">
    <TopicBoxes topic = {data}/>
    </div>
  );
});

return (
  <div className = "row">

    <div className = "col-xs-1"></div>
    <div className = "topicBox col-xs-10 jumbotron">
        <h3 className = "topicTitle">Hobbies</h3>
        {topicFlow}
      </div>
    <div className = "col-xs-1"></div>

      </div>


)

}






export default TopicContainer;
