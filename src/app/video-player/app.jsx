import React from 'react'
import { render } from 'react-dom'
import reducer from './video-reducers'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from './video-actions'
import Video from './components/video';
import 'styles/video-player.scss';


const VideoPlayer = (props) => {
	console.log("VideoPlayer:",props)
	const {config,actions} = props;
	return(
	  <section className="video-player">
	    <Video config={config} setTime={props.setTime} actions={actions} hasMedia={props.hasMedia}/>
	  </section>
	)
}

const mapStateToProps = state => ({
  config: state.config,
  setTime: state.setTime,
  hasMedia: state.hasMedia
})

const mapDispatchToProps = dispatch => {
	let bindActions = bindActionCreators(Actions, dispatch);
	console.log("bindActions",bindActions);
	return {
	  actions: bindActions
	}
}

let _VideoPlayer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoPlayer);

export default _VideoPlayer;
