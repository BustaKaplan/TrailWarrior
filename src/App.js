import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentBox from './CommentBox.js';
import CommentForm from './CommentForm.js';

class App extends Component {
  render() {
    return (
        <body>
          <header>
            <div className = "right">
              <h1>Trail Warrior</h1>
              <div className= "subheader"> For the weekend warrior in all of us </div>
              <div className = "boxes">
                <div className = "box"> Home </div>
                <div className = "box"> Profile </div>
                <div className = "box"> Search </div>
              </div>
            </div>
            <div className = "right">
              <img className = "profile-pic" src={"img/unnamed.jpg"} alt="Profile Picture"/>
              <div className = "search"> Search </div>
            </div>
          </header>

          <h2>The Never Summer Wilderness</h2>
          <img src={'./Template.jpg'} alt={"Trail Photo"} width={500}/>
          <h4> Trail Miles: 19 <br/> Elevation Gain: 6,000 <br/> Location: Grand Lake, CO</h4>
          <h4> Color Scheme </h4>
          <div className="color-combos">
            <div className = "color" id="green"> #669933 </div>
            <div className = "color" id = "gray"> #49475B </div>
            <div className = "color" id = "purple"> #953255 </div>
            <div className = "color" id = "black"> #14080E </div>
            <div className = "color" id = "white"> #FFFFFF </div>
          </div>
          <CommentBox />
          <CommentForm />
        </body>
        );
      }
    }

export default App;
