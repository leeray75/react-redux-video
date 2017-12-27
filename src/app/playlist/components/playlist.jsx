import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import PlaylistItem from './playlist-item'

export default class PlaylistComponent extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  
  shouldComponentUpdate(nextProps,nextState){
    return true;
  }

  componentDidMount(){

  }
  getPlaylist(){
    return this.props.videos.map( (video,index)=>{
      const key = 'playlist-'+index;
      const isActive = video.amp.media.source[0].src == this.props.currentVideo.amp.media.source[0].src;
      return (
        <PlaylistItem key={key} 
          onClick={this.props.onChangeVideo} 
          video={video} 
          isActive={isActive} />
      )
    })
  }
  render() {
    console.log("Render Playolist:",this.props.videos);
    if(this.props.videos.length<2){
      return null;
    }
    return (
      <section className="playlist-component">
        <ul>
        {this.getPlaylist()}
        </ul>
      </section>
    )
  }
}
PlaylistComponent.propTypes = {
  videos: PropTypes.array,
  actions: PropTypes.object,
  currentVideo: PropTypes.object
}
PlaylistComponent.defaultProps = {
  videos: []
}