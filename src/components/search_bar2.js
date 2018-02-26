import React from "react";

class SearchBar2 extends React.Component {
  constructor(props){
    super(props);

    this.state = { searchInput : null };
  }

  searcher= () =>{
  const searchValue = document.querySelector(".searching").value;

  this.setState({searchInput: searchValue});

  this.props.onYoutubeSearch(this.state.searchInput);
  }
  render(){
    return(
        <div className="row searchBar2">
          <h3 className="netflix">YourTube</h3>
        <div className = "col-xs-1"></div>
        <div className = "col-xs-10">
        <input className="form-control searching"id="searchItem"placeholder="  Search for any video here"/>
        <button className = "btn btn-danger searchSubmit"onClick={this.searcher}>Search</button>
        </div>
        </div>

    );
  }
}


export default SearchBar2;
