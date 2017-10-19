import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {
  render () {
    return(
      <body>
        <div class="container-fluid">
          <div className ="col-12 thumbnail text-center img-responsive">
            <img className= "splash" src={require('./Splash.jpg')} alt="Splash"/>
            <div>
              <div className ="caption">
                <p>Where is your next adventure? <span class="glyphicon glyphicon-search"></span></p></div>
              </div>
            </div>
          </div>
          </body>
    );
  }
}

export default Home;
