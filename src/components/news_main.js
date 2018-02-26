import React from "react";


const NewsMain = (props)=>{

  return(
    <div className="row noborder mainNews">
      <div className="col-xs-1"></div>
      <div className="col-xs-10 mainNews jumbotron">
        <h2 className="mainNewsTitle">{props.currentNews.headline}</h2>

          <img className="newsPhoto"src={props.currentNews.image}/>

        <h3 className="fullStory">{props.currentNews.full}</h3>
      </div>
    </div>
  )
}

export default NewsMain;
