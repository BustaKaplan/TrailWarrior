import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Neversummerwilderness from './Neversummerwilderness.js';
import Twinsisterspeak from './Twinsisterspeak.js';
import Katytrail from './Katytrail.js';
import Traillist from './Traillist.js';
import Trail from './Trail.js';


class Search extends React.Component {
  render () {
    const Main = () => (
      <main>
        <Switch>
          <Route path='/search/neversummerwilderness' component={Neversummerwilderness}/>
          <Route path='/search/twinsisterspeak' component={Twinsisterspeak}/>
          <Route path='/search/katytrail' component={Katytrail}/>
          <Route path= '/search' component = {Traillist}/>
        </Switch>
        </Trails>
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
