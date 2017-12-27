import React from 'react'
import Chapters from './app'
import { Provider } from 'react-redux'
import { bindActionCreators } from 'redux';
import ChaptersStore from './chapters-store';
import * as ChaptersActions from './chapters-actions';
import VideoStore from 'app/video-player/video-store';
import * as VideoActionTypes from 'app/video-player/video-action-types';
import 'styles/chapters.scss';

const Module = (props)=>{
  if(props.chapters!=null){
    ChaptersStore.dispatch(ChaptersActions.setChapters(props.chapters));
  }
  return (
    <section className="chapters-module">
      <Provider store={ChaptersStore}>
        <Chapters />
      </Provider>
    </section>
  )
}

export default Module;

VideoStore.subscribe(()=>{
  const videoState = VideoStore.getState();
  const currentTime = videoState.currentTime;
  const chaptersState = ChaptersStore.getState();
  const chapters = chaptersState.chapters;

  const currentChapter = chapters.find( (chapter)=>{
    return chapter.startTime<=currentTime && chapter.endTime>=currentTime;
  })
  if(videoState.actionType == VideoActionTypes.SET_VIDEO){
    ChaptersStore.dispatch(ChaptersActions.setChapters(videoState.config.chapters));
  }
  else if(currentChapter!=null && currentChapter.startTime != chaptersState.currentChapter.startTime){
    ChaptersStore.dispatch(ChaptersActions.setCurrentChapter(currentChapter));
  }

})