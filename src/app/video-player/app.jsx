import React from 'react'
import { render } from 'react-dom'
import reducer from './reducers'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as VideoActions from './actions/video-actions'
import Video from './components/video';
import 'styles/video-player.scss';


const VideoPlayer = (props) => {
	console.log("VideoPlayer:",props)
	const {config,actions} = props;
	return(
	  <section className="video-player">
	    <Video config={config} setTime={props.setTime} actions={actions} />
	  </section>
	)
}

const mapStateToProps = state => ({
  config: state.config,
  setTime: state.setTime
})

const mapDispatchToProps = dispatch => {
	let bindActions = bindActionCreators(VideoActions, dispatch);
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