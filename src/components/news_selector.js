import React from "react";
import NewsItem from "./news_item.js";
import NewsMain from "./news_main.js";

const NewsSelector = (props)=>{
const mm = props.gnn;
console.log(props.onSelectedStory);

  const  newsRoller =
    mm.map((newsFlow)=>{

      return <NewsItem stories={newsFlow} onSelectedStory ={props.onSelectedStory}/>
    });



    return(
      <div className = "row newsSelector">
        <div className = "col-xs-1"></div>
        <div className = "col-xs-10 jumbotron">
          <h3 className="newsTitle">News Selector </h3>
          {newsRoller}
          </div>
          <div className = "col-xs-1"></div>
        
          </div>
    );
  }


export default NewsSelector;
