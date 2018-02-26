const api_key = "	AIzaSyB1XpKqq411Gtn9uoMotWBQ7xAjtwWHRao";
import React from "react";
import ReactDOM from "react-dom";
import BowserNav from "./components/bowser_nav"
import AboutBowser from "./components/about_bowser"
import SideBowser from "./components/side_bowser"
import YTSearch from "youtube-api-search";
import BowserVideo from "./components/bowser_video.js";
import BowserNav2 from "./components/bowser_nav_2.js";
import SearchBar from "./components/search_bar.js";
import TopicContainer from "./components/topic_container.js";
import YoutubeBowserList from "./components/youtube_bowser_list";
import CommentBox from "./components/comment_box.js";
import CommentContainer from "./components/comment_container.js";
import ContactBox from "./components/contact_box.js"
import EvilTeamContainer from "./components/evil_team_container.js";
import CreatureBox from "./components/creature_box.js";
import SearchBar2 from "./components/search_bar2.js";
import YoutubeResults from "./components/youtube_results.js";
import VideoSearch from "./components/video_result.js";
import NewsSelector from "./components/news_selector.js";
import NewsMain from "./components/news_main.js";
import JuiceBox from "./components/juice_box.js";
const comment = [];
// Steps:
// Make the youtube search into a callback function
// Save a proptery to the Search Component that has the callback function
// When the user searches use save the event of the input and then call the function with
// the input value
// When the function exeuctues a search, then save it to a state.
// Make anhother callback function that will take the term
// When the input changes then call the callback
// Set the state with term
// Then call the props function with the saved term


//Throttling
// Helps the app become faster and not crash
// Primary purpose is to fire off functions at a frequency rather than instaantly
// Import lodash to use Throttling
// npm install lodash and import in React
// lodash.debounce({function},time); ----- syntax -----
// This will call the function at a frequency that the time parameter specifies




// Review

// Class Component will save state and can pass in other state varibles
// Functional Componenent are simple functions that just take in properties from
// class components and uses them
// constructor will save all the stats into that object to be used, this will target
// the constructor object
// You can pass callbacks to other components and use them
// these are useful because the component can save values into the parameter from
// the parent componenet and it allows effective and simple parent and child component
// communication
// You should limit the amount of callbacks you use
// Redux will make the passing callbacks to child components easier and more trackable
// Redux is apllication level setState



const portfolioTopics = [
  {
    topic: "Playing Chess",
    rank: "chess",
    color:"green"
},
{

      topic: "Hiking Mountains",
      rank:  "hiking",
      color:"purple"
},
{
  topic: "Bowling",
    rank:  "bowling",
  color: "red"
},
{

  topic: "Video Games",
  rank:  "games",
      color:"green"
},
{
  topic: "Reading",
    rank:  "read",
  color:"blue"


},
{

  topic: "Cooking",
  rank:  "food",
      color:"green"
},
{
topic: "Volenteering",
  rank:  "volenteer",
    color:"green"
},
{

topic: "Robotics",
  rank:  "robot",
    color:"green"
}

];


// Create a new component and turn to HTMl
class App extends React.Component{
  constructor(props){
    super(props);
      this.state = { youtube:[] ,
          portfolio: [],
          comments:[],
          words:[],
          test: [
            "k",
            "c",
            "4",
            "l",
            "ii"
          ],
          selectedVideo: null,
          Stories: [
            {
              headline:"Donald Trump",
              summary:"Donald Trump is at it again",
            full: "It was August 1977 and astronomer Jerry Ehman was looking through computer readouts from a telescope tasked with searching for possible alien signals when something rare happened: He actually found something.The Big Ear telescope, based at Ohio State University, had been pointing at a star called Chi Sagittarii as part of an experiment to search for extraterrestrial intelligence (SETI).Ehman was volunteering with the SETI programme at the time, and one evening he was poring over the printouts when saw a string of numbers and letters: To this day that sequence is considered by many to be the best candidate for an extraterrestrial signal we've ever seen.Named the Wow! signal after what Ehman wrote on the printout, it was a burst of narrowband radio waves at a frequency of 1,420 megahertz. For the most part, natural sources, like galaxies and stars, are what's called  radio sources. Narrowband sources, like the signal Ehman had found, tend to be human made.",
              image:"./../../assets/images/trump.jpg",
              id:"fhkseken"

            },
            {
              headline:"Stock Market",
              summary:"Stock Market swiftly recovers after collapse",
              full: "It was August 1977 and astronomer Jerry Ehman was looking through computer readouts from a telescope tasked with searching for possible alien signals when something rare happened: He actually found something.The Big Ear telescope, based at Ohio State University, had been pointing at a star called Chi Sagittarii as part of an experiment to search for extraterrestrial intelligence (SETI).Ehman was volunteering with the SETI programme at the time, and one evening he was poring over the printouts when saw a string of numbers and letters: To this day that sequence is considered by many to be the best candidate for an extraterrestrial signal we've ever seen.Named the Wow! signal after what Ehman wrote on the printout, it was a burst of narrowband radio waves at a frequency of 1,420 megahertz. For the most part, natural sources, like galaxies and stars, are what's called  radio sources. Narrowband sources, like the signal Ehman had found, tend to be human made.",
              image:"./../../assets/images/stock.jpg",
              id:"fhurfhur"

            },
            {
              headline:"Space Exploration ",
              summary:"Spacex successfully launches first rocket into space",
              full: "It was August 1977 and astronomer Jerry Ehman was looking through computer readouts from a telescope tasked with searching for possible alien signals when something rare happened: He actually found something.The Big Ear telescope, based at Ohio State University, had been pointing at a star called Chi Sagittarii as part of an experiment to search for extraterrestrial intelligence (SETI).Ehman was volunteering with the SETI programme at the time, and one evening he was poring over the printouts when saw a string of numbers and letters: To this day that sequence is considered by many to be the best candidate for an extraterrestrial signal we've ever seen.Named the Wow! signal after what Ehman wrote on the printout, it was a burst of narrowband radio waves at a frequency of 1,420 megahertz. For the most part, natural sources, like galaxies and stars, are what's called  radio sources. Narrowband sources, like the signal Ehman had found, tend to be human made.",
              image:"./../../assets/images/space.jpg",
              id:"bvehbv"

            },
            {
              headline:"Pollution",
              summary:"Ice caps filled with 15 millions tons of mercury is estimated to melt by 2100",
              full: "It was August 1977 and astronomer Jerry Ehman was looking through computer readouts from a telescope tasked with searching for possible alien signals when something rare happened: He actually found something.The Big Ear telescope, based at Ohio State University, had been pointing at a star called Chi Sagittarii as part of an experiment to search for extraterrestrial intelligence (SETI).Ehman was volunteering with the SETI programme at the time, and one evening he was poring over the printouts when saw a string of numbers and letters: To this day that sequence is considered by many to be the best candidate for an extraterrestrial signal we've ever seen.Named the Wow! signal after what Ehman wrote on the printout, it was a burst of narrowband radio waves at a frequency of 1,420 megahertz. For the most part, natural sources, like galaxies and stars, are what's called  radio sources. Narrowband sources, like the signal Ehman had found, tend to be human made.",
              image:"./../../assets/images/pollute.jpg",
              id:"djirj"

            },
            {
              headline:"Donald Trump",
              summary:"Donald Trump is at it again",
            full: "It was August 1977 and astronomer Jerry Ehman was looking through computer readouts from a telescope tasked with searching for possible alien signals when something rare happened: He actually found something.The Big Ear telescope, based at Ohio State University, had been pointing at a star called Chi Sagittarii as part of an experiment to search for extraterrestrial intelligence (SETI).Ehman was volunteering with the SETI programme at the time, and one evening he was poring over the printouts when saw a string of numbers and letters: To this day that sequence is considered by many to be the best candidate for an extraterrestrial signal we've ever seen.Named the Wow! signal after what Ehman wrote on the printout, it was a burst of narrowband radio waves at a frequency of 1,420 megahertz. For the most part, natural sources, like galaxies and stars, are what's called  radio sources. Narrowband sources, like the signal Ehman had found, tend to be human made.",
              image:"./../../assets/images/trump.jpg",
              id:"fhkseken"

            },
            {
              headline:"Stock Market",
              summary:"Stock Market swiftly recovers after collapse",
              full: "It was August 1977 and astronomer Jerry Ehman was looking through computer readouts from a telescope tasked with searching for possible alien signals when something rare happened: He actually found something.The Big Ear telescope, based at Ohio State University, had been pointing at a star called Chi Sagittarii as part of an experiment to search for extraterrestrial intelligence (SETI).Ehman was volunteering with the SETI programme at the time, and one evening he was poring over the printouts when saw a string of numbers and letters: To this day that sequence is considered by many to be the best candidate for an extraterrestrial signal we've ever seen.Named the Wow! signal after what Ehman wrote on the printout, it was a burst of narrowband radio waves at a frequency of 1,420 megahertz. For the most part, natural sources, like galaxies and stars, are what's called  radio sources. Narrowband sources, like the signal Ehman had found, tend to be human made.",
              image:"./../../assets/images/stock.jpg",
              id:"fhurfhur"

            },
            {
              headline:"Space Exploration ",
              summary:"Spacex successfully launches first rocket into space",
              full: "It was August 1977 and astronomer Jerry Ehman was looking through computer readouts from a telescope tasked with searching for possible alien signals when something rare happened: He actually found something.The Big Ear telescope, based at Ohio State University, had been pointing at a star called Chi Sagittarii as part of an experiment to search for extraterrestrial intelligence (SETI).Ehman was volunteering with the SETI programme at the time, and one evening he was poring over the printouts when saw a string of numbers and letters: To this day that sequence is considered by many to be the best candidate for an extraterrestrial signal we've ever seen.Named the Wow! signal after what Ehman wrote on the printout, it was a burst of narrowband radio waves at a frequency of 1,420 megahertz. For the most part, natural sources, like galaxies and stars, are what's called  radio sources. Narrowband sources, like the signal Ehman had found, tend to be human made.",
              image:"./../../assets/images/space.jpg",
              id:"bvehbv"

            },
            {
              headline:"Pollution",
              summary:"Ice caps filled with 15 millions tons of mercury is estimated to melt by 2100",
              full: "It was August 1977 and astronomer Jerry Ehman was looking through computer readouts from a telescope tasked with searching for possible alien signals when something rare happened: He actually found something.The Big Ear telescope, based at Ohio State University, had been pointing at a star called Chi Sagittarii as part of an experiment to search for extraterrestrial intelligence (SETI).Ehman was volunteering with the SETI programme at the time, and one evening he was poring over the printouts when saw a string of numbers and letters: To this day that sequence is considered by many to be the best candidate for an extraterrestrial signal we've ever seen.Named the Wow! signal after what Ehman wrote on the printout, it was a burst of narrowband radio waves at a frequency of 1,420 megahertz. For the most part, natural sources, like galaxies and stars, are what's called  radio sources. Narrowband sources, like the signal Ehman had found, tend to be human made.",
              image:"./../../assets/images/pollute.jpg",
              id:"djirj"

            }

          ],
          currentStory : {},
          
      };



  }

  youtubeSearch = (word)=>{
    YTSearch({ key:api_key,term:word},(video)=>{

        this.setState({youtube:video});

    });
  }

  render(){
      const flower = this.state.youtube.map((mojo)=>{
            return  <YoutubeResults youtubeData={mojo} key={mojo.etag}/>
      });
      console.log(this.state.currentStory);

    return(
      <div className = "bowserContainer">
        <BowserNav2 />
        <JuiceBox />
        <NewsSelector gnn = {this.state.Stories} onSelectedStory = {newsMojo => this.setState({currentStory:newsMojo})}/>
        <NewsMain currentNews = {this.state.currentStory}/>
        <div className="blackness">
        <SearchBar2 onYoutubeSearch = {term =>this.youtubeSearch(term)} />
        <VideoSearch youtubeData = {this.state.youtube[0]}/>
        {flower}
        </div>
        <CreatureBox />
        <CommentBox />
        <TopicContainer port={portfolioTopics} />
        <ContactBox />

     </div>
)};
}


ReactDOM.render(<App />, document.querySelector(".contain"));
