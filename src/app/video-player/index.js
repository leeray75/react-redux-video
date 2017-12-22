import React from 'react'
import VideoPlayer from './app'
import { Provider } from 'react-redux'
import * as VideoActions from './actions/video-actions';
import { bindActionCreators } from 'redux';
import VideoStore from './stores/video-store';

const Module = (props)=>{
  if(props.config!=null){
    VideoStore.dispatch(VideoActions.setMedia(props.config));
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

