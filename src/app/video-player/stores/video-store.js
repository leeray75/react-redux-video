import { createStore } from 'redux'
import reducers from 'app/video-player/reducers/video-reducer'
const VideoStore = createStore(reducers);
export default VideoStore;

