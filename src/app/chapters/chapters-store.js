import { createStore } from 'redux'
import reducers from './chapters-reducers'
import VideoStore from 'app/video-player/video-store';
import * as ChaptersActions from './chapters-actions';
const ChaptersStore = createStore(reducers);
VideoStore.subscribe(()=>{
	const videoState = VideoStore.getState();
	const currentTime = videoState.currentTime;
	const chaptersState = ChaptersStore.getState();
	const chapters = chaptersState.chapters;

	const currentChapter = chapters.find( (chapter)=>{
		return chapter.startTime<=currentTime && chapter.endTime>=currentTime;
	})
	if(currentChapter!=null && currentChapter.startTime != chaptersState.currentChapter.startTime){
		ChaptersStore.dispatch(ChaptersActions.setCurrentChapter(currentChapter));
	}

})
export default ChaptersStore;

