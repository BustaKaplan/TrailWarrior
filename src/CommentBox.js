import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class CommentBox extends React.Component {
render () {
  const comment = this._getComments();
  const commentCount = `{comment.length}`;
  return (
    <div className = "commentBox">
      <h3>COMMENTS</h3>
      <h4 className = "commentCount">{this._getCommentsTitle(comment.length)} </h4>
      <div className = "comments">
        {comment}
      </div>
    </div>
  );
}

  // ReactDOM.render(<CommentBox />, document.getElementById('root'));
_getComments(){

  const commentList = [
    {id: 1, author: "Michael Perez", body: "Awesome Pictures!"},
    {id: 2, author: "Tofu Kaplan", body: "Looks like fun but happy you're home :)"}
  ];
  return commentList.map((comment) => {
    return (
      < comment
        author = {comment.author} body = {comment.body} key = {comment.id} />
    );
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
