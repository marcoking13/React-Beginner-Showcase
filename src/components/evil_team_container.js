import React from "react";


class EvilTeamContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {options: [] }
  }


  render(){

    return(
      <div className = "row">
        <div className = "col-xs-1"></div>
        <div className = "col-xs-10 jumbotron"></div>
        <div className = "col-xs-1"></div>

      </div>

    );

  }



}

export default EvilTeamContainer ;
