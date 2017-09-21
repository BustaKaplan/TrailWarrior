import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Comment extends React.Component {
  render () {
    return(
      <h1>
        By: {this.props.author}<br />
        {this.props.body}
      </h1>
    )
  }
}
export default Comment;
