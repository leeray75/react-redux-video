import { createStore } from 'redux'
import reducers from './video-reducers'
const VideoStore = createStore(reducers);
console.log("VideoStore:",VideoStore);
export default VideoStore;

