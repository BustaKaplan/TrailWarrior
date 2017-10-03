import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DateComponent from './DateComponent.js';

class Comment extends React.Component {
  render () {
    return(
      <div className = "onecomment">
        <div className = "commentauthor">
          By: {this.props.author} on: {this.props.date} <br/>
        </div>
        <div className = "commentbody">
          {this.props.body}
        </div>
      </div>
    )
  }
}
export default Comment;
