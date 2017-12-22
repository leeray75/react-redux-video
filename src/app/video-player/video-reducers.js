import * as Actions from './video-action-types'
import VideoState from './video-state';
import $ from 'jquery'

function VideoReducers(state = VideoState, action) {
  let nextState = Object.assign({},state);
  if(action.event){
    nextState.event = action.event;
    nextState.amp = action.amp;
  }
  switch (action.type) {
    case Actions.SET_MEDIA:
      console.log("Setting Config");
      nextState.config=action.config;
      break;
    case Actions.TIME_UPDATE:
      nextState.currentTime = action.amp.getCurrentTime();
      break;
    case Actions.SET_CURRENT_TIME:
      nextState.setTime=action.setTime;
      break;
    default:
      
  }
  
  return nextState;
}



export default VideoReducers