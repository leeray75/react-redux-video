import * as types from './playlist-action-types';

export const setCurrentVideo = (video)=>{
	return { type: types.SET_CURRENT_VIDEO, video: video}
}

export const setVideos = (videos=[])=>{
	console.log("Set Videos:",videos);
	return {
		type: types.SET_VIDEOS,
		videos: videos
	}
}
