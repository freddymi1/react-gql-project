import React from 'react';
import Modal from 'react-modal';
import actioncable from 'actioncable';
import $ from "jquery";

import baseUrl from '../../../../../../services/BaseUrl';
import CommentList from './components/CommentList/CommentList';
import { RiCloseCircleLine } from 'react-icons/ri';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    position: 'absolute',
    top: '40px',
    left: '40px',
    right: '40px',
    bottom: '40px',
    border: '1px solid #ccc',
    overflow: 'hidden',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
    margin: '0 40px 40px 40px',
  },
};

Modal.setAppElement('#root');


const currentUser = sessionStorage.getItem("currentUser");

export default class Comment extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false,
      message: "",
      comments: []
    }
    this.cable = actioncable.createConsumer('ws://82.165.206.170/ws')
  }

  componentDidMount() {
    this.fetchLessonVideoComments()
    this.createSubscription()
    this.props.countComment(this.state.comments.length)
  }

  fetchLessonVideoComments = () => {
    fetch(baseUrl() + '/student_x_comment_x_exercise/' + this.props.exerciseId )
      .then(res => res.json())
      .then(comments => {
        this.setState({ comments: comments })
        this.autoScrollDown()
        this.props.countComment(this.state.comments.length)
      });
  }

  autoScrollDown = () => {
    if(this.state.modalIsOpen === false) {
      $("div#comments")
        .animate({ 
          scrollTop: ($("#comments").height()) * 4
      }, 500)
      this.setState({ modalIsOpen: true })
    }
  }

  createSubscription = () => {
    this.cable.subscriptions.create(
      { channel: 'StudentXCommentXExercisesChannel' },
      { received: comments => {
        this.handleReceivedMessage(comments)
      } }
    )
  }

  handleReceivedMessage = comment => {
    this.setState({ comments: [...this.state.comments, comment] })
    this.props.countComment(this.state.comments.length)
  }

  handleMessageSubmit = e => {
    e.preventDefault();
    const messageObj = {
      comment: this.state.message,
      exercise_id: this.props.exerciseId,
      student_id: JSON.parse(currentUser).data.data.id
    }
    const fetchObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(messageObj)
    }
    fetch(baseUrl() + '/student_x_comment_x_exercises', fetchObj)
    e.target.reset()
  }

  render() {
    return (
      <div className='text-center transform m-5'>
        <Modal
          isOpen={this.props.isOpen}
          onRequestClose={() => this.setState({ modalIsOpen: false })}
          style={customStyles}
          className='modal bg-gray-50'
          overlayClassName='overlay-modal'
          onMou
        >
          <div>
            <button
              className='w-auto sticky top-0 float-right'
              type='button'
              style={{ transition: 'all .15s ease' }}
              onClick={() => this.props.closeModal() }
            >
              <RiCloseCircleLine
                className='inline-block float-right text-gray-600 hover:text-green-700'
                size='2em'
              />
            </button>

            <div className="block relative w-full overflow-auto" id="comments" style={{ height: "60vh" }}>
              {
                this.state.comments.map(comment => (
                  <CommentList key={ comment.comment.id } comment={ comment } studentId={ JSON.parse(currentUser).data.data.id } />
                ))
              }
            </div>

            {/* <actionCable 
              channel={{ channel: 'LessonVideoCommentsChannel' }}
              onReceived={this.handleReceivedMessages}
            /> */}
  
            <form onSubmit={ e => { this.handleMessageSubmit(e) } }>
              <div className='h-full w-full flex flex-wrap content-end justify-center'>
                <input type='hidden' />
                <textarea
                  className='w-8/12 shadow-inner p-4 border-0 mb-4 rounded-lg focus:shadow-outline text-1xl shadow-lg'
                  placeholder='Votre commentaire :)'
                  cols='1'
                  rows='3'
                  id='comment_content'
                  spellCheck='false'
                  onChange={ 
                    e => {
                      this.setState({ message: e.target.value })
                    }
                  }
                ></textarea>
                <button className='font-bold py-2 px-4 w-8/12 bg-green-700 text-lg text-white shadow-md rounded-lg '>
                  Commenter{' '}
                </button>
              </div>
            </form>

          </div>
        </Modal>
      </div>
    );
  }
}

