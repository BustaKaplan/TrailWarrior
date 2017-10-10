import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Map from './Map.js';
import CommentBox from './CommentBox.js';
import Star from './Star.js';
import DateComponent from './DateComponent.js';

class Neversummerwilderness extends React.Component {
  render () {
    return(
      <body>
          <h2>The Never Summer Wilderness</h2>
          <div className = "graphics">
            <img className= "trail-photo" src={require('./neversummer.jpg')} alt="Trail Photo" width={500}/>
            <Map/>
          </div>
          <h4> Trail Miles: 19 <br/> Elevation Gain: 6,000 <br/> Location: Grand Lake, CO </h4>
        <div className = "user-input">
          <CommentBox />
          {console.log("the date is" + <DateComponent />)}
          <Star />
        </div>
        </body>
        );
      }
  }

export default Neversummerwilderness;
