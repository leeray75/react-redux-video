import React from 'react'
import { render } from 'react-dom'
import reducer from './reducers'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ChapterActions from './chapters-actions'
import ChaptersList from './chapters-list-component';

const Chapters = (props) => {
	const {config,actions} = props;
	console.log("Chapters Props",props);
	return(
	  <section className="chapters">
	  	<ChaptersList {...props} />
	  </section>
	)
}

const mapStateToProps = state => ({
  chapters: state.chapters,
  currentChapter: state.currentChapter
})

const mapDispatchToProps = dispatch => {
	let bindActions = bindActionCreators(ChapterActions, dispatch);
	return {
	  actions: bindActions
	}
}

let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chapters);

export default App;