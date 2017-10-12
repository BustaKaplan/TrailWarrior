import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CommentForm from './CommentForm.js';
import Comment from './Comment.js';

class Trail extends React.Component {
  render () {
    const test = this._getTrails();
    return(
      <div>{test}</div>
    )
  }
  _getTrails(){
    const allTrails = [
      {id: 1, name: 'Eagle Rock Loop', state: "AR", modes: 'Hike, Backpack, Horseback'},
      {id: 2, name: 'Whispering Pines Trail', state: "MO", modes: 'Hike, Backpack, Cycle'}
    ];
      return allTrails.map((trail) => {
        return(
          <Trail
            name = {trail.name}
            state = {trail.state}
            modes = {trail.modes}/>
      );
    });
  }
}
console.log("TEST" + <Trail/>)
export default Trail;
