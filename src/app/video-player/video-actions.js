import * as types from './video-action-types';

export const abort = (e,amp)=>({ type: types.ABORT, event: e, amp: amp})
export const canplay = (e,amp)=>({ type: types.CANPLAY, event: e, amp: amp})
export const canplaythrough = (e,amp)=>({ type: types.CAN_PLAY_THROUGH,  event: e, amp: amp})
export const durationchange = (e,amp)=>({ type: types.DURATION_CHANGE,  event: e, amp: amp})
export const ended = (e,amp)=>({ type: types.ENDED,  event: e, amp: amp})
export const emptied = (e,amp)=>({ type: types.EMPTIED,  event: e, amp: amp})
export const error = (e,amp)=>({ type: types.ERROR,  event: e, amp: amp})
export const loadedmetadata = (e,amp)=>({ type: types.LOADED_META_DATA,  event: e, amp: amp})
export const loadstart = (e,amp)=>({ type: types.LOAD_START,  event: e, amp: amp})
export const pause = (e,amp)=>({ type: types.PAUSE,  event: e, amp: amp})
export const play = (e,amp)=>({ type: types.PLAY,  event: e, amp: amp})
export const playing = (e,amp)=>({ type: types.PLAYING,  event: e, amp: amp})
export const progress = (e,amp)=>({ type: types.PROGRESS,  event: e, amp: amp})
export const ratechange = (e,amp)=>({ type: types.RATE_CHANGE, event: e, amp: amp})
export const seeked = (e,amp)=>({ type: types.SEEKED,  event: e, amp: amp})
export const seeking = (e,amp)=>({ type: types.SEEKING,  event: e, amp: amp})
export const stalled = (e,amp)=>({ type: types.STALLED,  event: e, amp: amp})
export const suspend= (e,amp)=>({ type: types.SUSPEND,  event: e, amp: amp})
export const timeupdate = (e,amp)=>({ type: types.TIME_UPDATE,  event: e, amp: amp})
export const volumechange = (e,amp)=>({ type: types.VOLUME_CHANGE,  event: e, amp: amp})
export const waiting = (e,amp)=>({ type: types.WAITING,  event: e, amp: amp})
export const setMedia = (config)=>{
	return {type: types.SET_MEDIA, config: config}
}
export const setCurrentTime = (time)=>{
	return {type: types.SET_CURRENT_TIME, setTime: time}
}
