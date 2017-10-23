import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render () {
    return(
      <body>
        <div className ="container-fluid">
          <div className ="row thumbnail text-center img-responsive">
            <img className= "img-responsive " src={require('./Splash.jpg')} alt="Splash"/>
            <div>
              <div className ="caption">
                <a> <Link to='/search' className ="white-test">Where is your next adventure?</Link></a>
              </div>
            </div>
          </div>
        </div>
          </body>
    );
  }
}

export default Home;
