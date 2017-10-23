import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Map from './Map.js';
import CommentBox from './CommentBox.js';
import Star from './Star.js';
import DateComponent from './DateComponent.js';

class Whisperingpines extends React.Component {
  render () {
    return(
      <body>
          <h2>Whispering Pines Trail</h2>
          <div className = "graphics">
            <img className= "trail-photo" src={require('./eaglerockloop.jpg')} alt="Trail Photo" width={500}/>
              <Map />
          </div>
          <h4> Trail Miles: 6 <br/> Elevation Gain: 1,100 <br/> Location: Pacific, MO <br/></h4>
        <div className = "user-input">
          <CommentBox />
          {console.log("the date is" + <DateComponent />)}
          <div className= 'star-container'>
          <Star />
          </div>
        </div>
        </body>
        );
      }
  }

export default Whisperingpines;
