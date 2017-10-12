import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Neversummerwilderness from './Neversummerwilderness.js';
import Twinsisterspeak from './Twinsisterspeak.js';
import Katytrail from './Katytrail.js';
import Trail from './Trail.js';

class Traillist extends React.Component {
  render () {
  return(

    <traillist>
      <div>
        <h4> Colorado </h4>
          <li className = "trail" ><Link to='/search/neversummerwilderness'>The Never Summer Wilderness</Link></li>
          <li className = "trail" ><Link to='/search/twinsisterspeak'>Twin Sisters Peak</Link></li>
        <h4> Missouri </h4>
          <li className = "trail"><Link to='/search/katytrail'>Katy Trail</Link></li>
      </div>
    </traillist>

);
}
}
export default Traillist;
