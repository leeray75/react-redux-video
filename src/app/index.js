import React from 'react'
import { render } from 'react-dom'
//import { createStore } from 'redux'
//import { Provider } from 'react-redux'
import VideoPlayer from './video-player'
import Chapters from './chapters';
//import reducer from './video-player/reducers'
import 'styles/app.scss';

const config = {
    paths:{
      "player": "/amp-premier/amp.premier/",
      "resources": "/amp-premier/resources/"
    },
    resources:[],
    plugins:{
      react:{
        resources:[
          {src: "https://unpkg.com/react@15/dist/react.min.js", debug: "https://unpkg.com/react@15/dist/react.js", type: "text/javascript"},
          {src: "https://unpkg.com/react-dom@15/dist/react-dom.min.js", debug: "https://unpkg.com/react-dom@15/dist/react-dom.js", type: "text/javascript"},
          {src: "https://unpkg.com/prop-types/prop-types.min.js", debug: "https://unpkg.com/prop-types/prop-types.min.js", type: "text/javascript"},
          {src: "/amp-premier/akamai/amp/react/React.min.css", debug: "../akamai/amp/react/React.css", type: "text/css"},
          {src: "/amp-premier/akamai/amp/react/React.min.js", debug: "../akamai/amp/react/React.js", type: "text/javascript"}
        ],
        native: false
      }
    },
    controls: {
      enabled: false,
      mode: 'none'
    },
    autoplay: false,
    playsinline: true,
    mode: 'html',
    muted: true,
    media : {
      title : "Inline Playback",
      poster : '/amp-premier/resources/images/hd_world.jpg',
      source : [{
        src : "http://multiplatform-f.akamaihd.net/z/multi/april11/hdworld/hdworld_,512x288_450_b,640x360_700_b,768x432_1000_b,1024x576_1400_m,1280x720_1900_m,1280x720_2500_m,1280x720_3500_m,.mp4.csmil/manifest.f4m",
        type : "video/f4m"
      }, {
        src : "http://multiplatform-f.akamaihd.net/i/multi/april11/hdworld/hdworld_,512x288_450_b,640x360_700_b,768x432_1000_b,1024x576_1400_m,1280x720_1900_m,1280x720_2500_m,1280x720_3500_m,.mp4.csmil/master.m3u8",
        type : "application/x-mpegURL"
      }]
    }
  };

const chapters = [
	{
		startTime: 0,
		title: "Chapter 1",
    thumbnail: ""
	},
	{
		startTime: 60,
		title: "Chapter 2",
    thumnail: ""
	}
]
render(
  <main>
    <div id="player-container">
      <VideoPlayer config={config} />
      <Chapters chapters={chapters} />
    </div>
  </main>,
  document.getElementById('root')
)
