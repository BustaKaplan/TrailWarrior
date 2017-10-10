import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {
  render () {
    return(
      <body>
          <img className= "splash" src={require('./Splash.jpg')} alt="Splash"/>
          <div className = "splashquestion"> Where is your next adventure? </div>
      </body>
    );
  }
}

export default Home;
