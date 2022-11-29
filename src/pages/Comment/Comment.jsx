import React, { useState } from 'react';
import actioncable from 'actioncable';
import baseUrl from '../../services/BaseUrl';
import { CommentComponent } from './components/CommentComponent';


export default class Comment extends React.Component {
  constructor(){
    super();
    this.state = {
      modalIsOpen: false,
      message: "",
      lessonVideoComments: []
    }
    this.cable = actioncable.createConsumer('ws://82.165.206.170/ws')
  }

  componentDidMount() {
    this.fetchLessonVideoComments()
    this.createSubscription()
  }

  componentDidUpdate() {
    console.log(this.state.message)
  }

  fetchLessonVideoComments = () => {
    fetch(baseUrl() + '/lesson_video_comments/1')
      .then(res => res.json())
      .then(comments => this.setState({ lessonVideoComments: comments }));
  }

  createSubscription = () => {
    this.cable.subscriptions.create(
      { channel: 'LessonVideoCommentsChannel' },
      { received: comments => this.handleReceivedMessage(comments) }
    )
  }

  handleReceivedMessage = comment => {
    this.setState({ lessonVideoComments: [...this.state.lessonVideoComments, comment] })
  }

  handleMessageSubmit = e => {
    e.preventDefault();
    const messageObj = {
      message: this.state.message,
      lesson_video_id: 1
    }
    const fetchObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(messageObj)
    }
    fetch(baseUrl() + '/lesson_video_comments', fetchObj)
    e.target.reset()
  }

  setMessage = (msg) => {
    this.setState({ message: msg })
  }

  render() {
    return (
      <CommentComponent
       comments={ this.state.lessonVideoComments } 
       handleMessageSubmit={ this.handleMessageSubmit } 
       setMessage={ this.setMessage }
      /> 
    );
  }
}
