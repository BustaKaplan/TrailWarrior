import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class CommentBox extends React.Component {
render () {
  return (
    <div className = "commentBox">
      <h3>COMMENTS</h3>
        <h4>HEYYYYYAAAAA</h4>
        // <comment/>
        // <comment/>
        // <comment/>
    </div>
  );
}
}
  // ReactDOM.render(<CommentBox />, document.getElementById('root'));
// _getComments(){
//   const CommentList = [
//     {id:1, author: "Michael Perez", body:"Awesome Pictures!"},
//     {id:2, author: "Tofu Kaplan", body:"Looks like fun but happy you're home :)"}
//   ];
//   return CommentList.map((comment)=>{
//     return(<Comment author = {comment.author} body = {comment.body} key = {comment.id}/>
//     )
//   });
// };
export default CommentBox;
