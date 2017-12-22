import { createStore } from 'redux'
import reducers from './reducers'
import VideoStore from 'app/video-player/video-store';
import * as VideoActions from 'app/video-player/video-actions'
const store = createStore(reducers);
let prevState = store.getState();
store.subscribe(()=>{
	console.log("Arguments:",arguments);
	let state = store.getState();
	if(state.currentChapter!=null){
		if(prevState.currentChapter==null || state.currentChapter.startTime!=prevState.currentChapter.startTime){
			VideoStore.dispatch(VideoActions.setCurrentTime(state.currentChapter.startTime));
		}
	}
	prevState = state;

})
export default store;

