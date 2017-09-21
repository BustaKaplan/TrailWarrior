import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CommentForm from './CommentForm.js';
import Comment from './Comment.js';


class CommentBox extends React.Component {
render () {
  const comment = this._getComments();
  console.log({comment});
  const commentCount = `{comment.length}`;

  return (
    <div className = "comment-box">
      <h3 className = "comments">COMMENTS</h3>
      <h4 className = "commentCount">{this._getCommentsTitle(comment.length)} </h4>
      <div className = "comments">
        {comment}
      </div>
      <CommentForm addComment={this._addComment.bind(this)} />
    </div>
  );
}
constructor() {
  super();
  this.state = {
    showComments: false,
    comments: [
      {id: 1, author: 'Michael Perez', body: 'Awesome Pictures!'},
      {id: 2, author: 'Tofu Kaplan', body: 'Looks like fun but happy you are home :)'}
    ]
  };
}
_addComment(author, body){
  const comment = {
    id: this.state.comments.length +1,
    author,
    body
  };
this.setState({ comments: this.state.comments.concat([comment]) });
}
_getComments(){
  return this.state.comments.map((comment) => {
    return (
        <Comment
          author = {comment.author}
          body = {comment.body}
          key = {comment.id}/>

      // }
    );
  });

  // const commentList = [
  //   {id: 1, author: 'Michael Perez', body: 'Awesome Pictures!'},
  //   {id: 2, author: 'Tofu Kaplan', body: 'Looks like fun but happy you are home :)'}
  // ];

  // return commentList.map((comment) => {
  //   function Comment() {
  //     return(
  //       <Comment
  //         author = {comment.author} body = {comment.body} key = {comment.id}/>
  //   );
  // }
  // });

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
