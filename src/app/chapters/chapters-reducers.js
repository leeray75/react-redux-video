import * as Actions from './chapters-action-types'
import ChaptersState from './chapters-state';
function ChaptersReducers(state = ChaptersState, action) {
  let nextState = Object.assign({},state);
  switch (action.type) {
    case Actions.SET_CURRENT_CHAPTER:
      nextState.currentChapter=action.currentChapter;
      break;
    case Actions.SET_CHAPTERS:
      let currentChapter = action.chapters.length>0 ? action.chapters[0] : null;
      let chapters = action.chapters.sort( (chapterA,chapterB)=>{
        return chapterA.startTime-chapterB.startTime
      });
      chapters.forEach((chapter,index)=>{
        chapter.endTime = (index<chapters.length-1) ? chapters[index+1].startTime-1 : Infinity;
      })
      nextState.chapters=chapters;
      nextState.currentChapter = currentChapter;
      break;
    default:
      
  }
  return nextState;
}



export default ChaptersReducers