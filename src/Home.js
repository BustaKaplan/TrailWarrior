import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {
  render () {
    return(
      <body>
        <div className ="row" id="box-search">
          <div className ="thumbnail text-center">
          <img className= "splash" src={require('./Splash.jpg')} alt="Splash"/>
            <div>
              <div className ="col-5"></div>
              <div className ="caption" className ="col-2">
                <p>Where is your next adventure? <span class="glyphicon glyphicon-search"></span></p></div>
              <div className ="col-5"></div>
              </div>
            </div>
          </div>
          </body>
    );
  }
}

export default Home;
