import React from "react";

const VideoSearch = (props) =>{


  if(!props.youtubeData){
    return <div>...Loading</div>
  }
  console.log(props.youtubeData)
  const videoKey = props.youtubeData.id.videoId;
 const youtubeUrl = "https://www.youtube.com/embed/"+videoKey;
  return(
    <div className = "row noBorder videoSearch">
    <div className="col-xs-1"></div>
    <div className="col-xs-10 videoInsert">
      <iframe className = "videoFlow"src={youtubeUrl}></iframe>
    </div>
    </div>
  );
}

export default VideoSearch;
