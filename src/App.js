import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
              <img className = "profile-pic" src="img/unnamed.jpg" alt="Profile Picture"/>
              <div className = "search"> Search </div>
            </div>
          </header>

          <h2>"H1, H2 and H3 will be 'Scope One', serif" </h2>
          <h4> "H4, H5, H6 and P's will be 'Droid Sans', sans-serif "</h4>
          <h4> Color Scheme </h4>
          <div className="color-combos">
            <div className = "color" id="green"> #669933 </div>
            <div className = "color" id = "gray"> #49475B </div>
            <div className = "color" id = "purple"> #953255 </div>
            <div className = "color" id = "black"> #14080E </div>
            <div classNAme = "color" id = "white"> #FFFFFF </div>
          </div>
      </body>

    );
  }
}

export default App;
