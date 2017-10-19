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
            <li className = "box"><Link to='/'>Home</Link></li>
            <li className = "box" ><Link to='/profile'>Profile</Link></li>
            <li className = "box"><Link to='/search'>Search</Link></li>
          </ul>
        </div>
      </boxes>
    )


    return (

      <body>
          <div className = "navbar navbar-default">
            <div className = "right">
              <h1 className = 'navbar-brand'>Trail Warrior</h1>
              <div className= "subheader"> For the weekend warrior in all of us </div>
              <Boxes/>
            </div>

            <div className = "left">
              <div className = "steps">
                <div className= "footone"> <i className = "foot" className="fi-foot"></i> </div>
                <div className = "foottwo"> <i className = "foot" className="fi-foot"></i> </div>
                <div className = "footthree"> <i className = "foot" className="fi-foot"></i> </div>
              </div>
              <div>
                <img className = "profile-pic" src={require("./unnamed.jpg")} alt="Profile Picture"/>
                <div className = "search"> Search </div>
              </div>
            </div>
          </div>
          <Main/>
        </body>
        );
      }
    }

export default App;
