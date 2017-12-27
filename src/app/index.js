import React from 'react'
import { render } from 'react-dom'
//import { createStore } from 'redux'
//import { Provider } from 'react-redux'
import VideoPlayer from './video-player'
import Chapters from './chapters';
import Playlist from './playlist';
//import reducer from './video-player/reducers'
import 'styles/app.scss';

fetch("/json/config.json").then((response)=>{
  response.json().then((data)=>{
    doRender(data);
  },(error)=>{
    console.log("Response JSON error",error);
  })
},
(error)=>{
  console.error("Fetch Config Error:",error);
})

const doRender = (data) => {  
  const config = data;
  const ampConfig = config.videos[0].amp;
  const chapters = config.videos[0].chapters;
  render(
    <main>
      <div id="player-container">
        <VideoPlayer config={ampConfig} />
        <Chapters chapters={chapters} />
      </div>
      <div id="playlist-container">
        <Playlist videos={config.videos} />
      </div>
    </main>,
    document.getElementById('root')
  )
}
