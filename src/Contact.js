import React, { Component } from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    position: 'bottom',
    width: '100%',
    height: '100%'
    
  };
  
class Contact extends Component {
render() {
return (
<div>
    
<h2>GOT QUESTIONS?</h2>
<p>The easiest thing to do is post on our <a href="http://forum.kirupa.com">forums</a>.
</p>
<div>
<footer>
<Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            align:'center',
            lat:  36.8027778,
            lng: 10.1797222
          }
        }
      />
      </footer>
      </div>
</div>
);

}
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyA9mi61E9iDk0GB9a7pUjWgb1YE8_6h8-c'
  })(Contact);