import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentBox from './CommentBox.js';
import CommentForm from './CommentForm.js';
import DateComponent from './DateComponent.js';
import Map from './Map.js';
// import Foundation from 'react-foundation';

class App extends Component {
  render() {
    return (
      // <head>
      // <link rel="stylesheet" href={require("./foundation-icons")} />
      // </head>
      <body>
          <header>
            <div className = "right">
              <h1>Trail Warrior</h1>
              <div className= "subheader"> For the weekend warrior in all of us </div>
              <div className = "boxes">
                <a href= "TrailWarrior/colorscheme.html" className = "box"> Home </a>
                <div className = "box"> Profile </div>
                <div className = "box"> Search </div>
              </div>
            </div>

            <div className = "left">
              <div className = "steps">
                <div className= "footone"> <i className = "foot" className="fi-foot"></i> </div>
                <div className = "foottwo"> <i className = "foot" className="fi-foot"></i> </div>
                <div className = "footthree"> <i className = "foot" className="fi-foot"></i> </div>
              </div>
              <div>
                <img className = "profile-pic" src={require("./unnamed.jpg")} alt="Profile Picture"/>
                <div className = "search"> Search </div>
              </div>
            </div>
          </header>

          <h2>The Never Summer Wilderness</h2>
          <div className = "graphics">
            <img className= "trail-photo" src={require('./Template.jpg')} alt="Trail Photo" width={500}/>
            <Map/>
          </div>
          <h4> Trail Miles: 19 <br/> Elevation Gain: 6,000 <br/> Location: Grand Lake, CO</h4>

          <CommentBox />
          {console.log("the date is" + <DateComponent/>)}
        </body>
        );
      }
    }

export default App;
