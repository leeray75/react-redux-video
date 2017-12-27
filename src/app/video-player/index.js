import React from 'react'
import VideoPlayer from './app'
import { Provider } from 'react-redux'
import * as VideoActions from './video-actions';
import { bindActionCreators } from 'redux';
import VideoStore from './video-store';

const Module = (props)=>{
  console.log("Video Module:",props);
  if(props.config!=null){
    VideoStore.dispatch(VideoActions.setVideo(props.config));
  }
  return (
    <section className="video-player-module">
      <Provider store={VideoStore}>
        <VideoPlayer />
      </Provider>
    </section>
  )
}

export default Module;

