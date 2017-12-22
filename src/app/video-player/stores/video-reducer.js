import * as Actions from 'app/video-player/actions/video-action-types'
import VideoState from './video-state';
import $ from 'jquery'

function VideoReducers(state = VideoState, action) {
  console.log("Chapters Reducers",action);
  let nextState = $.extend(true,{},state);
  if(actions.event){
    nextState.event = actions.event;
    nextState.amp = actions.amp;
  }
  switch (action.type) {
    case Actions.SET_MEDIA:
      nextState.config=action.config;
      break;
    case Actions.TIME_UPDATE:
      nextState.currentTime = actions.amp.getCurrentTime();
      break;
    case Actions.SET_CURRENT_TIME:
      nextState.setTime=action.setTime;
      break;
    default:
      
  }
  console.log("Next State:",nextState);
  return nextState;
}



export default ChaptersReducers