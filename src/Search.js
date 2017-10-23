import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Eaglerockloop from './Eaglerockloop.js';
import Neversummerwilderness from './Neversummerwilderness.js';
import Twinsisterspeak from './Twinsisterspeak.js';
import Whisperingpines from './Whisperingpines.js';
import Katytrail from './Katytrail.js';
import Traillist from './Traillist.js';
import Trail from './Trail.js';


class Search extends React.Component {
  render () {
    const Main = () => (
      <main>
        <Switch>
          <Route path='/search/eaglerockloop' component={Eaglerockloop}/>
          <Route path='/search/neversummerwilderness' component={Neversummerwilderness}/>
          <Route path='/search/twinsisterspeak' component={Twinsisterspeak}/>
          <Route path='/search/whisperingpines' component={Whisperingpines}/>
          <Route path='/search/katytrail' component={Katytrail}/>
          <Route path= '/search' component = {Traillist}/>
        </Switch>
      </main>
    )


    return(
      <div>
        <div>
          <Main/>
        </div>
      </div>

    );
      }
  }

export default Search;
