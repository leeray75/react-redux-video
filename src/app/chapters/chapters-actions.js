import * as types from './chapters-action-types';

export const setCurrentChapter = (chapter)=>({ type: types.SET_CURRENT_CHAPTER, currentChapter: chapter})
export const setChapters = (chapters=[])=>{
 	return { 
 		type: types.SET_CHAPTERS, 
 		chapters: chapters
 	}
}

