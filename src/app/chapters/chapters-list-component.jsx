import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import ChapterItem from './chapter-item-component'

export default class ChaptersComponent extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  
  shouldComponentUpdate(nextProps,nextState){
    console.log("should update:",nextProps,nextState);
    return true;
  }

  componentDidMount(){

  }
  getChapters(){
    return this.props.chapters.map( (chapter,index)=>{
      const key = 'chapter-'+index;
      const isActive = chapter.startTime==this.props.currentChapter.startTime;
      return (
        <ChapterItem key={key} 
          onClick={this.props.actions.setCurrentChapter} 
          chapter={chapter} 
          isActive={isActive} />
      )
    })
  }
  render() {
    return (
      <section className="chapters-component">
        <ul>
        {this.getChapters()}
        </ul>
      </section>
    )
  }
}
ChaptersComponent.propTypes = {
  chapters: PropTypes.array,
  currentChapter: PropTypes.object,
  actions: PropTypes.object
}
ChaptersComponent.defaultProps = {
  chapters: [],
  currentChapter: null
}