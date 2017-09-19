import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CommentForm from './CommentForm.js';


class CommentBox extends React.Component {
render () {
  const comment = this._getComments();
  console.log({comment});
  const commentCount = `{comment.length}`;
  return (
    <div className = "comment-box">
      <h3>COMMENTS</h3>
      <h4 className = "commentCount">{this._getCommentsTitle(comment.length)} </h4>
      <div className = "comments">
        {comment}
      </div>
    </div>
  );
}

_getComments(){

  const commentList = [
    {id: 1, author: 'Michael Perez', body: 'Awesome Pictures!'},
    {id: 2, author: 'Tofu Kaplan', body: 'Looks like fun but happy you are home :)'}
  ];

  return commentList.map((comment) => {
    function Comment() {
      return(
        <Comment
          author = {comment.author} body = {comment.body} key = {comment.id}/>
    );
  }
  });
 }

_getCommentsTitle(commentCount){
  if (commentCount === 1){
    return "1 comment";
  } else {
    return `${commentCount} comments`
  }
}

}
export default CommentBox;
