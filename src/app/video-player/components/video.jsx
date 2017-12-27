import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import * as VideoActionTypes from 'app/video-player/video-action-types';
import 'styles/amp.premier.css';
import $ from 'jquery';
import AmpConfig from 'app/video-player/configs/amp-config';
const akamaiId = 'akamai-media-player';
let akamaiContainer = document.createElement('div');
akamaiContainer.setAttribute('id',akamaiId);

export default class VideoComponent extends Component {
  constructor(props){
    super(props);
    this.state = {}
    this.amp=null;
  }

  
  shouldComponentUpdate(nextProps,nextState){
    console.log("should update:",nextProps,nextState);
    return true;
  }
  componentWillUpdate(nextProps,nextState){
    console.log("Video Will Update",nextProps);
    console.log("Test:",nextProps.setTime!=this.props.setTime);
    if(this.amp==null) return;


    if(nextProps.hasMedia == false){
      console.log("Set Media",nextProps.config);
      let media = nextProps.config.amp.hasOwnProperty('media') ? nextProps.config.amp.media : nextProps.config.amp;
      console.log("Set AMP Media:",this.amp.setMedia(media));
    }
    else if(nextProps.setTime!=this.props.setTime){
      this.amp.setCurrentTime(nextProps.setTime);
    }
  }
  initListeners(){
    let mediaEl = this.amp.getMediaElement();
    let $mediaEl = $(mediaEl);
    let mediaEvents = Object.keys(VideoActionTypes);
    mediaEvents.forEach( (key)=>{
      const eventName = VideoActionTypes[key].toLowerCase();
      $mediaEl
      .on(eventName,(e)=>{
        console.log("Media Event:",e.type);
        this.props.actions[eventName](e,this.amp);
      })
    })

  }
  componentDidMount(){
    console.log("Video Component Mounted:",this.props,"\n",this.state);
    if(this.props.config==null){
      return;
    }
    let $this = $(ReactDOM.findDOMNode(this));
    $this.append(akamaiContainer);
    let config = this.props.config;
    console.log("config:",config);
    window.amp = window.akamai.amp.AMP.create(akamaiId, config, this.initListeners.bind(this));
    this.amp = window.amp;
    
    //this.initListeners();
  }
  componentDidUpdate(prevProps,prevState){
    if(this.props.hasMedia==false){
      this.props.actions.setMedia(this.props.config,true);
    }
  }
  render() {
    return (
      <section className="video-component">
      </section>
    )
  }
}
VideoComponent.propTypes = {
  config: PropTypes.object,
  actions: PropTypes.object,
  hasMedia: PropTypes.bool
}
VideoComponent.defaultProps = {
}