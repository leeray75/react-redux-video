import React from 'react'
import Playlist from './app'
import { Provider } from 'react-redux'
import { bindActionCreators } from 'redux';
import PlaylistStore from './playlist-store';
import * as PlaylistActions from './playlist-actions';
import VideoStore from 'app/video-player/video-store';
import * as VideoActions from 'app/video-player/video-actions';
import * as VideoActionTypes from 'app/video-player/video-action-types';
import 'styles/playlist.scss';

const Module = (props)=>{
  if(props.videos!=null && props.videos.length>0){
    PlaylistStore.dispatch(PlaylistActions.setVideos(props.videos));
  }
  return (
    <section className="playlist-module">
      <Provider store={PlaylistStore}>
        <Playlist onChangeVideo={changeVideo}/>
      </Provider>
    </section>
  )
}

export default Module;

const changeVideo = function(video){
  VideoStore.dispatch(VideoActions.setVideo(video));
}

VideoStore.subscribe(()=>{
  const videoState = VideoStore.getState();
  const playlistState = PlaylistStore.getState();
  if(videoState.actionType == VideoActionTypes.SET_VIDEO){
    PlaylistStore.dispatch(PlaylistActions.setCurrentVideo(videoState.config));
  }
  else if(videoState.ended){
    const activeIndex = playlistState.videos.findIndex((video)=>{
      return video.active;
    })
    const nextIndex = activeIndex+1;
    if(nextIndex<playlistState.videos.length){
      const nextVideo = playlistState.videos[nextIndex];
      VideoStore.dispatch(VideoActions.setVideo(nextVideo));
    }
  }
})