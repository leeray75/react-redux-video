import React from 'react'
import { render } from 'react-dom'
import reducer from './playlist-reducers'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as PlaylistActions from './playlist-actions'
import PlayList from './components/playlist';

const PlaylistContainer = (props) => {
	const {config,actions} = props;
	console.log("Playlist Container Props",props);
	return(
	  <section className="playlist">
	  	<PlayList {...props} />
	  </section>
	)
}

const mapStateToProps = state => ({
  videos: state.videos,
  currentVideo: state.currentVideo
})

const mapDispatchToProps = dispatch => {
	let bindActions = bindActionCreators(PlaylistActions, dispatch);
	return {
	  actions: bindActions
	}
}

let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistContainer);

export default App;
