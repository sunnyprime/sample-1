import React, { Component } from 'react'
import YouTube from 'react-youtube';

export default class Videos extends Component {
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
            },
          };
          return <YouTube videoId="_nBlN9yp9R8" opts={opts} onReady={this._onReady} />;
        }
       
        _onReady(event) {
          // access to player in all event handlers via event.target
          event.target.pauseVideo();
        }
}
