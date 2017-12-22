import React from 'react'
import { render } from 'react-dom'
//import { createStore } from 'redux'
//import { Provider } from 'react-redux'
import VideoPlayer from './video-player'
import Chapters from './chapters';
//import reducer from './video-player/reducers'
import 'styles/app.scss';

const config = {
      autoplay: true,
      debug: false,
      media : {
        title : "Inline Playback",
        source : [{"src":"//webmd-vh.akamaihd.net/i/delivery/delivery/6b/4e/6b4efcc7-2cb0-4689-b55b-815db8c7a518/ACC_2016_Sizzle_033016_,1000k,400k,750k,2500k,3000k,.mp4.csmil/master.m3u8","type":"application/x-mpegURL"},{"src":"//webmd-vh.akamaihd.net/z/delivery/delivery/6b/4e/6b4efcc7-2cb0-4689-b55b-815db8c7a518/ACC_2016_Sizzle_033016_,1000k,400k,750k,2500k,3000k,.mp4.csmil/manifest.f4m","type":"video/f4m"},{"src":"//webmd-a.akamaihd.net/delivery/delivery/6b/4e/6b4efcc7-2cb0-4689-b55b-815db8c7a518/ACC_2016_Sizzle_033016_750k.mp4","type":"video/mp4"}]
      }
    }
const chapters = [
	{
		startTime: 0,
		title: "Chapter 1"
	},
	{
		startTime: 60,
		title: "Chapter 2"
	}
]
render(
  <main>
  <VideoPlayer config={config} />
  <Chapters chapters={chapters} />
  </main>,
  document.getElementById('root')
)
