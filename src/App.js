import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentBox from './CommentBox.js';
import CommentForm from './CommentForm.js';
import DateComponent from './DateComponent.js';
import Map from './Map.js';
import Star from './Star.js';
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'


class App extends Component {
  render() {
    const Profile = () => (
      <div>
        <ul>
          <li>Name: Chelsea</li>
          <li>City: Saint Louis</li>
          <li>Age: 25</li>
        </ul>
      </div>
    )
    const Search = () => (
      <div>
        <ul>
          <li>Whacha looking for</li>
          <li>City: Saint Louis</li>
          <li>Age: 25</li>
        </ul>
      </div>
    )
    const Home = () => (
      <div>
      </div>
    )
      const Main = () => (
        <main>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/search' component={Search}/>
          </Switch>
        </main>
    )
    const Header = () => (
      <header>
        <nav>
          <ul className = "boxes">
            <li className = "box"><Link to='/'>Home</Link></li>
            <li className = "box" ><Link to='/profile'>Profile</Link></li>
            <li className = "box"><Link to='/search'>Search</Link></li>
          </ul>
        </nav>
      </header>
    )


    return (

      <body>
          <header>
            <div className = "right">
              <h1>Trail Warrior</h1>
              <div className= "subheader"> For the weekend warrior in all of us </div>
              <Header/>
              <Main/>
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
          </header>

          <h2>The Never Summer Wilderness</h2>
          <div className = "graphics">
            <img className= "trail-photo" src={require('./Template.jpg')} alt="Trail Photo" width={500}/>
            <Map/>
          </div>
          <h4> Trail Miles: 19 <br/> Elevation Gain: 6,000 <br/> Location: Grand Lake, CO</h4>
        <div className = "user-input">
          <CommentBox />
          {console.log("the date is" + <DateComponent />)}
          <Star />
        </div>
        </body>
        );
      }
    }

export default App;
