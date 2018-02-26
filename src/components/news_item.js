import React from "react";

const NewsItem = (props)=>{


return(
  <div className="newsCard"onClick = {()=>{
    props.onSelectedStory(props.stories);
  }}>
    <div className="newsTitleContainer">
      <h4 className="newsTitle">{props.stories.headline}</h4>
      </div>
      <div className = "newsSummaryContainer">
        <h5 className = "newsSummary">{props.stories.summary}</h5>
      </div>
    </div>
);
}


export default NewsItem;
