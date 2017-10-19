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
    const allTrails = [
      {id: 1, link:"#", name: 'Eagle Rock Loop', state: "AR", modes: 'Hike, Backpack, Horseback'},
      {id: 2, link:"/search/neversummerwilderness", name: 'Never Summer Wilderness', state: "CO", modes: 'Hike, Backpack, Horseback'},
      {id: 3, link:"/search/twinsisterspeak", name: 'Twin Sisters', state: "CO", modes: 'Hike'},
      {id: 4, link:"#", name: 'Whispering Pines Trail', state: "MO", modes: 'Hike, Backpack, Cycle'},
      {id: 5, link:"/search/katytrail", name: 'Katy Trail', state: "MO", modes: 'Hike, Cycle'}
    ];
    const trails = allTrails.map((trail) => {
        return(
          <Trail
            name = {trail.name}
            link = {trail.link}
            state = {trail.state}
            modes = {trail.modes}/>
      )
    });
    return (<ul>{trails}</ul>)
  }
}
export default Traillist;
