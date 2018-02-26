import React from "react";


const CommentItem = (props) => {

  const comment = props.onion;
  console.log(comment);
  return(


        <div className="row hh">

          <div className = "col-xs-1 "></div>
          <div className="col-xs-10 jumbotron">
          <div className="commentItem">
            <h2 className = "commentText">{comment}</h2>
            </div>
          </div>
        </div>

  );

}



export default CommentItem;
