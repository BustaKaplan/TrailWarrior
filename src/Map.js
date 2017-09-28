import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
render() {
    return (
      <Map
        google={this.props.google}
        style={{width: '33%', position: 'absolute'}}
        // style={style}
          initialCenter={{
            lat: 40.3548,
            lng: -105.8577
          }}
          zoom={9}
          onClick={this.onMapClicked}>
          <Marker
            title={'Baker/Bowen Trailhead'}
            position={{lat: 40.3548, lng: -105.8577}} />
          </Map>



    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyChA5gyhEZYntuW_yCBBgiEmpRGAk0MAhk')
})(MapContainer)
