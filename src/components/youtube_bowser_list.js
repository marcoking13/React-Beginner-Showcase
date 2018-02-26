import React from "react";
import YoutubeBowserItem from "./youtube_bowser_item";

const YoutubeBowserList = (props)=>{

const youtubeRoll = props.videos.map((flow)=>{

    return  <YoutubeBowserItem key={flow.etag} videos = {flow}/>


});
  return (<ul className = "col-xs-5 list-group">
    {youtubeRoll}
  </ul>);
}


export default YoutubeBowserList;
