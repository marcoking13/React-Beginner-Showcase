import React from "react";





const BowserVideo = (props) =>{
//
// const videoData = props.flow;
// const videoKey = videoData.id.videoId;



 if(!props.flow){

   return <div>'....Loading'</div>
 }
return (

<div className = "col-xs-8 jumbotron">


<iframe src = "http://youtube.com/embed/Z1Yd7upQsXY">

</iframe>



</div>

);

}


export default BowserVideo;
