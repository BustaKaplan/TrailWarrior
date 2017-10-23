import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CommentForm from './CommentForm.js';
import Comment from './Comment.js';
import { Link } from 'react-router-dom'

class Trail extends React.Component {
  render () {
    // const test = this._getTrails();
    return(
        <li className = "trail list-group-item" ><Link to={this.props.link} className = "purple">{this.props.name}, {this.props.state}</Link> </li>

    )
  }

}

export default Trail;
