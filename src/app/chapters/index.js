import React from 'react'
import Chapters from './app'
import { Provider } from 'react-redux'
import { bindActionCreators } from 'redux';
import Store from './chapters-store';
import * as ChaptersActions from './chapters-actions';
import 'styles/chapters.scss';

const Module = (props)=>{
  if(props.chapters!=null){
    Store.dispatch(ChaptersActions.setChapters(props.chapters));
  }
  return (
    <section className="chapters-module">
      <Provider store={Store}>
        <Chapters />
      </Provider>
    </section>
  )
}

export default Module;

