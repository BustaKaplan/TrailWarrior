import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Trailone from './Trailone.js';

class Search extends React.Component {
  render () {
    const Main = () => (
      <main>
        <Switch>


          <Route path='/neversummerwilderness' component={Trailone}/>
          <Route path='/twinsisterspeak' component={Trailone}/>
          <Route path='/katytrail' component={Trailone}/>

        </Switch>
      </main>
    )
      const Traillist = () => (
        <traillist>
          <div>
            <ul className = "trails">
              <li className = "trail" ><Link to='/neversummerwilderness'>The Never Summer Wilderness</Link></li>
              <li className = "trail"><Link to='/twinsisterspeak'>Twin Sisters Peak</Link></li>
              <li className = "trail"><Link to='/katytrail'>Katy Trail</Link></li>
            </ul>
          </div>
        </traillist>
      )
    return(
      <div>
      <div>
        <Traillist/>
      </div>
      <div>
      <Main/>
      </div>
      </div>

    );
      }
  }

export default Search;
