import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CommentForm extends React.Component {
  render() {
    return (
      <form className = "comment-form" onSubmit= {this._handleSubmit.bind(this)}>
        <label> Post comments about your trip! </label>
        <div className = "comment-form-fields">
          <input placeholder = "Name: " ref = {(input) => this._author = input}/>
          <textarea placeholder = "What's your story?" ref={(textarea) => this._body = textarea}/>
        </div>
        <div className = "comment-form-actions">
          <button type= "submit">
            Post your story
          </button>
        </div>
      </form>
    );
  }
  _handleSubmit(event){
    event.preventDefault();
      let author = this._author;
      let body = this._body;
      this.props.addComment(author.value, body.value);
  }
}
export default CommentForm;
