import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import CommentBox from './CommentBox.js';
import CommentForm from './CommentForm.js';
import DateComponent from './DateComponent.js';
import Profile from './Profile.js';
import Map from './Map.js';
import Star from './Star.js';
import Search from './Search.js';
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'


class App extends Component {
  render() {
      const Main = () => (
        <main>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/search' component={Search}/>
            <Route path='/profile' component={Profile}/>
          </Switch>
        </main>
    )
    const Boxes = () => (
      <boxes>
        <div>
          <ul className = "boxes"  className = 'nav navbar-nav'>

            <li ><Link to='/' className = " box btn btn-default">Home</Link></li>
            <li ><Link to='/profile' className = "box btn btn-default">Profile</Link></li>
            <li><Link to='/search' className = "box btn btn-default">Search</Link></li>
          </ul>
        </div>
      </boxes>
    )


    return (

      <body>
          <div className = "navbar navbar-default">
            <div className = "right">
              <div className = 'header'>Trail Warrior</div>
              <div className= "subheader"> For the weekend warrior in all of us </div>
              <Boxes/>
            </div>
            <div className="nav navbar-nav navbar-right">
              <div className = "steps">
                <div className= "footone"> <i className = "foot" className="fi-foot"></i> </div>
                <div className = "foottwo"> <i className = "foot" className="fi-foot"></i> </div>
                <div className = "footthree"> <i className = "foot" className="fi-foot"></i> </div>
              </div>
              <div className = "pic-search">
                <img className = "profile-pic" src={require("./unnamed.jpg")} alt="Profile Picture"/>
                <form className="form-inline">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search"></input>
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
              </div>
            </div>
          </div>
          <Main/>
        </body>
        );
      }
    }

export default App;
