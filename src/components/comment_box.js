import React from "react";
// import CommentItem from "./comment_item.js";
// import CommentList from "./comment_list.js";
var comment  = [];

class CommentBox extends React.Component {

constructor(props){
  super(props);
  this.state = { words:["jay"] };


}



  commentPush=()=>{
   comment.push(document.querySelector(".comment_box").value);


   this.setState({words:comment});
   console.log(this.state.words);


  }

  // commentRoll = ()=>  {
  //   this.state.words.map((flow)=>{
  //     console.log(flow);
  //   return  (<CommentItem onion = {flow}/>)
  //   });
  // }


  render(){

    return(
      <div className = "opinionContainer">
      <div className = "row">



          <textArea className = "comment_box col-xs-10"/>
          <button className = "commentSubmit btn btn-danger" onClick = {this.commentPush}>Submit</button>

        </div>

        <div className = "row commentList jumbotron">
             <h3 className="commentT">Comments Section </h3>
        </div>
        </div>
    );
  }


}


export default CommentBox;
