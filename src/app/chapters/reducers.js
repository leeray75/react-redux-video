import * as Actions from './chapters-action-types'
import ChaptersState from './chapters-state';
import $ from 'jquery';
function ChaptersReducers(state = ChaptersState, action) {
  console.log("Chapters Reducers",action);
  let nextState = $.extend(true,{},state);
  switch (action.type) {
    case Actions.SET_CURRENT_CHAPTER:
      nextState.currentChapter=action.currentChapter;
      break;
    case Actions.SET_CHAPTERS:
      let currentChapter = action.chapters.length>0 ? action.chapters[0] : null;
      nextState.chapters=action.chapters;
      nextState.currentChapter = currentChapter;
      break;
    default:
      
  }
  console.log("Next State:",nextState);
  return nextState;
}



export default ChaptersReducers