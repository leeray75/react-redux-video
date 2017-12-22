import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
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
    if(this.amp!=null && nextProps.setTime!=this.props.setTime){
      this.amp.setCurrentTime(nextProps.setTime);
    }
  }
  initListeners(){
    let mediaEl = this.amp.getMediaElement();
    $(mediaEl).on('timeupdate',(e)=>{
      this.props.actions.timeupdate(e,this.amp);
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
  render() {
    return (
      <section className="video-component">
      </section>
    )
  }
}
VideoComponent.propTypes = {
  config: PropTypes.object,
  actions: PropTypes.object
}
VideoComponent.defaultProps = {
}