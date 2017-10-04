import React, { Component } from 'react';
import ReactDOM from 'react-dom';



class Star extends Component {
  render () {
    return(
      <div className= "star-box">
        <div className= "star-one" onmouseover="yellow"> <i className = "star" className="fi-star"></i> </div>
        <div className= "star-two"> <i className = "star" className="fi-star"></i> </div>
        <div className= "star-three"> <i className = "star" className="fi-star"></i> </div>
        <div className= "star-four"> <i className = "star" className="fi-star"></i> </div>
        <div className= "star-five"> <i className = "star" className="fi-star"></i> </div>

      </div>
    )
    }
}
export default Star;
