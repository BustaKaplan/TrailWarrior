import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Map from './Map.js';
import CommentBox from './CommentBox.js';
import Star from './Star.js';
import DateComponent from './DateComponent.js';

class Katytrail extends React.Component {
  render () {
    return(
      <body>
          <h2>The Katy Trail</h2>
          <div className = "graphics">
            <img className= "trail-photo" src={require('./Katytrail.jpg')} alt="Trail Photo" width={500}/>
            <Map/>
          </div>
          <h4> Trail Miles: 238 <br/> Elevation Gain: 435 feet <br/> Location: St. Charles, Mo </h4>
        <div className = "user-input">
          <CommentBox />
          {console.log("the date is" + <DateComponent />)}
          <Star />
        </div>
        </body>
        );
      }
  }

export default Katytrail;
