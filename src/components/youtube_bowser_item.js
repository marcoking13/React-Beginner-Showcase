import React from "react";
import YoutubeBowserList from "./youtube_bowser_list";

const YoutubeBowserItem = (props)=>{
  const videoData = props.videos;
  const snippet =  videoData.snippet.thumbnails.default.url;

return(
  <li className="jumbotron list-group-item room">
    <div className="video-list-media">

      <div className="media-left">
        <img className = "media-object" src={snippet}/>
        </div>

        <div className="media-body">

          <div className="media-heading"></div>
          <div>{videoData.snippet.title}</div>
        </div>
      </div>
    </li>
  );

}


export default YoutubeBowserItem;
