import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DateComponent from './DateComponent.js';

class CommentForm extends React.Component {
  render() {
    return (
      <form className = "comment-form" onSubmit= {this._handleSubmit.bind(this)}>
        <label className = "call-to-post"> Post comments about your trip! </label>
        <div className = "comment-form-fields">
          <input className = "name-form-field" placeholder = "Name: " ref = {(input) => this._author = input}/>
          <textarea className = "story-form-field" placeholder = "What's your story?" ref={(textarea) => this._body = textarea}/>
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
      let date = <DateComponent/>;
      this.props.addComment(author.value, body.value, date.value);

  }

}
export default CommentForm;
