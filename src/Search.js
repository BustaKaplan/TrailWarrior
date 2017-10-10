import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Neversummerwilderness from './Neversummerwilderness.js';
import Twinsisterspeak from './Twinsisterspeak.js';
import Katytrail from './Katytrail.js';


class Search extends React.Component {
  render () {
    const Main = () => (
      <main>
        <Switch>
          <Route path='/search/neversummerwilderness' component={Neversummerwilderness}/>
          <Route path='/search/twinsisterspeak' component={Twinsisterspeak}/>
          <Route path='/search/katytrail' component={Katytrail}/>

        </Switch>
      </main>
    )
      const Traillist = () => (
        <traillist>
          <div>
            <ul className = "trails">
              <li className = "trail" ><Link to='/search/neversummerwilderness'>The Never Summer Wilderness</Link></li>
              <li className = "trail"><Link to='/search/twinsisterspeak'>Twin Sisters Peak</Link></li>
              <li className = "trail"><Link to='/search/katytrail'>Katy Trail</Link></li>
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
