import { createStore } from 'redux'
import reducers from './video-reducers'
const VideoStore = createStore(reducers);
export default VideoStore;

