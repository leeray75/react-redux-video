import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import classnames from 'classnames';
import VideoStore from 'app/video-player/video-store';
import * as VideoActions from 'app/video-player/video-actions'

export default class ChapterItem extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
 
  shouldComponentUpdate(nextProps,nextState){
    return nextProps.isActive != this.props.isActive;
  }

  componentDidMount(){

  }
  doClick(e){
    e.preventDefault();
    if(this.props.isActive==false){
      VideoStore.dispatch(VideoActions.setCurrentTime(this.props.chapter.startTime));
    }
  }
  getStartTime(){
    const totalSeconds = this.props.chapter.startTime;
    let d = new Date(0,0,0);
    d.setSeconds(totalSeconds);
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    h = h<10 ? "0"+h : h;
    m = m<10 ? "0"+m : m==0 ? "00" : m;
    s = s<10 ? "0"+s : s==0 ? "00" : s;

    return (h!=0) ? `${h}:${m}:${s}` : `${m}:${s}`
  }
  render() {
    const itemClass = classnames({
      "chapter-item": true,
      "active": this.props.isActive
    })
    return (
      <li className={itemClass}>
        <a onClick={this.doClick.bind(this)}>
          <span className="chapter-title">{this.props.chapter.title}</span>
          <span className="time">{this.getStartTime()}</span>
        </a>
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