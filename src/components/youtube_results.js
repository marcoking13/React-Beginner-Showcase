import React from "react";

const YoutubeResults = (props) => {

   if(!props.youtubeData){
     return <div> ..loading</div>
   }
  const photoUrl = props.youtubeData.snippet.thumbnails.medium.url;
  const youtubeTitle = props.youtubeData.snippet.title;

  const youtubeBio = props.youtubeData.snippet.description;




  return(
      <div className ="row noBorder resultsContainer"onClick = {()=>props.onSelectedVideo(props.videoData)}>
        <div className="col-xs-1"></div>
        <div className ="col-xs-10 jumbotron resultItem">
          <div className="itemPhotoContainer">
            <img src={photoUrl}className="itemPhoto"/>
          </div>
          <div className="detailContainer">
            <h2 className="itemTitle">{youtubeTitle}</h2>
            <div className="itemDetail">{youtubeBio}</div>
          </div>
        </div>
      </div>
  );

}


export default YoutubeResults;
