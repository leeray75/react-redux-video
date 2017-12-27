import * as Actions from './video-action-types'
import VideoState from './video-state';

function VideoReducers(state = VideoState, action) {
  let nextState = Object.assign({},state);
  if(action.event){
    nextState.event = action.event;
    nextState.amp = action.amp;
  }
  switch (action.type) {
    case Actions.SET_MEDIA:
      if(action.hasMedia==true){
        nextState.hasMedia = true;
      }
      else{
        nextState = Object.assign({},VideoState);
        nextState.config=action.config;
      }
      break;
    case Actions.TIME_UPDATE:
      nextState.currentTime = action.amp.getCurrentTime();
      break;
    case Actions.SET_CURRENT_TIME:
      nextState.setTime=action.setTime;
      break;
    case Actions.SET_VIDEO:
      nextState = Object.assign({},VideoState);
      nextState.config=action.video;
      break;
    case Actions.ENDED:
      nextState.ended = true;
      break;
    default:
      
  }
  nextState.actionType=action.type;
  return nextState;
}



export default VideoReducers