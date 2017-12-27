import * as Actions from './playlist-action-types'
import PlaylistState from './playlist-state';
function PlaylistReducers(state = PlaylistState, action) {
  let nextState = Object.assign({},state);
  switch (action.type) {
    case Actions.SET_VIDEOS:
      nextState.videos = action.videos;
      nextState.currentVideo=action.videos[0];
      break;
    case Actions.SET_CURRENT_VIDEO:
      nextState.currentVideo=action.video;
      break;
    default:
      
  }
  console.log("PlaylistReducers:",action.type," : ",nextState);
  return nextState;
}



export default PlaylistReducers