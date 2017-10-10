import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Map from './Map.js';
import CommentBox from './CommentBox.js';
import Star from './Star.js';
import DateComponent from './DateComponent.js';

class Twinsisterspeak extends React.Component {
  render () {
    return(
      <body>
          <h2>Twin Sisters Peak</h2>
          <div className = "graphics">
            <img className= "trail-photo" src={require('./Template.jpg')} alt="Trail Photo" width={500}/>
            <Map/>
          </div>
          <h4> Trail Miles: 7.9 <br/> Elevation Gain: 2,664 <br/> Location: Estes Park, CO</h4>
        <div className = "user-input">
          <CommentBox />
          {console.log("the date is" + <DateComponent />)}
          <Star />
        </div>
        </body>
        );
      }
  }

export default Twinsisterspeak;
