import { createStore } from 'redux'
import reducers from './playlist-reducers'
const PlaylistStore = createStore(reducers);
export default PlaylistStore;

