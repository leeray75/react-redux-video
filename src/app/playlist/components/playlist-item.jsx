import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import classnames from 'classnames';


export default class PlaylistItem extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
 
  shouldComponentUpdate(nextProps,nextState){
    return true;
  }

  componentDidMount(){

  }
  doClick(e){
    e.preventDefault();
    if(this.props.isActive==false){
      this.props.onClick(this.props.video);
    }
  }

  render() {
    console.log("Render Video:",this.props.video);
    const config = this.props.video.amp;
    const itemClass = classnames({
      "video-item": true,
      "active": this.props.isActive
    })
    const title = config.hasOwnProperty('media') ? config.media.title : config.title;
    const linkStyle = {
      backgroundImage: `url(${config.media.poster})`
    }
    return (
      <li className={itemClass}>
        <a onClick={this.doClick.bind(this)} style={linkStyle}>
          <span className="video-title">{title}</span>
        </a>
      </li>
    )
  }
}
PlaylistItem.propTypes = {
  video: PropTypes.object,
  isActive: PropTypes.bool,
  onClick: PropTypes.func
}
PlaylistItem.defaultProps = {
  video: null,
  isActive: false
}