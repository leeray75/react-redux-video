import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import classnames from 'classnames';

export default class ChapterItem extends Component {
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
  doClick(e){
    e.preventDefault();
    this.props.onClick(this.props.chapter);
  }
  getStartTime(){
    return this.props.chapter.startTime
  }
  render() {
    const itemClass = classnames({
      "chapter-item": true,
      "active": this.props.isActive
    })
    return (
      <li className={itemClass} onClick={this.doClick.bind(this)}>
        <span className="chapter-title">{this.props.chapter.title}</span>
        <span className="time">{this.getStartTime()}</span>
      </li>
    )
  }
}
ChapterItem.propTypes = {
  chapter: PropTypes.object,
  isActive: PropTypes.bool,
  onClick: PropTypes.func
}
ChapterItem.defaultProps = {
  chapter: null,
  isActive: false
}