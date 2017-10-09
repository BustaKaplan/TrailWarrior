import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Profile extends React.Component {
  render () {
    return(
      <img className = "profile-pic" src={require("./unnamed.jpg")} alt="Profile Picture"/>
    )
  }
}

export default Profile;
