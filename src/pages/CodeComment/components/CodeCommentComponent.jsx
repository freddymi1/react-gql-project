import { useHistory } from "react-router-dom";
import $ from 'jquery';
import actioncable from 'actioncable';
import CommentList from './CommentList/CommentList';
import { RiArrowGoBackFill } from 'react-icons/ri';

import baseUrl from '../../../services/BaseUrl';
import React from "react";


const currentUser = sessionStorage.getItem('currentUser');

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      message: '',
      comments: [],
    };
    this.cable = actioncable.createConsumer('ws://82.165.206.170/ws');
  }

  componentDidMount() {
    this.fetchCodeComments();
    this.createSubscription();
  }

  fetchCodeComments = () => {
    fetch(baseUrl() + '/student_x_comment_x_code/' + this.props.codeId)
      .then((res) => res.json())
      .then((comments) => {
        this.setState({ comments: comments });
        this.autoScrollDown();
      });
  };

  autoScrollDown = () => {
    if (this.state.modalIsOpen === false) {
      $('div#comments').animate(
        {
          scrollTop: $('#comments').height() * 4,
        },
        500
      );
      this.setState({ modalIsOpen: true });
    }
  };

  createSubscription = () => {
    this.cable.subscriptions.create(
      { channel: 'StudentXCommentXCodesChannel' },
      {
        received: (comments) => {
          this.handleReceivedMessage(comments);
        },
      }
    );
  };

  handleReceivedMessage = (comment) => {
    this.setState({ comments: [...this.state.comments, comment] });
  };

  handleMessageSubmit = (e) => {
    e.preventDefault();
    const messageObj = {
      comment: this.state.message,
      code_id: this.props.codeId,
      student_id: JSON.parse(currentUser).data.data.id,
    };
    const fetchObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageObj),
    };
    fetch(baseUrl() + '/student_x_comment_x_codes/', fetchObj);
    e.target.reset();
    // console.log(fetchObj);
  };

  render() {
    // console.log('CCCCCCCC', this.props.codeId);
    return (
      <div className='text-center transform m-5'>
        <div>
          <div className='block relative w-full overflow-auto' id='comments'>
            {this.state.comments.map((comment) => (
              <CommentList
                key={comment.comment.id}
                comment={comment}
                studentId={JSON.parse(currentUser).data.data.id}
                studentImage={comment.student.image}
              />
            ))}
          </div>

          {/* <actionCable 
              channel={{ channel: 'LessonVideoCommentsChannel' }}
              onReceived={this.handleReceivedMessages}
            /> */}

          <form
            onSubmit={(e) => {
              this.handleMessageSubmit(e);
            }}
          >
            <div className='h-full w-full flex flex-wrap content-end justify-center'>
              <input type='hidden' />
              <textarea
                className='w-8/12 shadow-inner p-4 border-0 mb-4 rounded-lg focus:shadow-outline text-1xl shadow-lg'
                placeholder='Votre commentaire :)'
                cols='1'
                rows='3'
                id='comment_content'
                spellCheck='false'
                onChange={(e) => {
                  this.setState({ message: e.target.value });
                }}
              ></textarea>
              <button className='font-bold py-2 px-4 w-8/12 bg-green-700 text-lg text-white shadow-md rounded-lg '>
                Commenter{' '}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export const CodeCommentComponent = ({ codeId }) => {
  let history = useHistory();
  // console.log(codeId);

  return (
    <div className='overflow-auto h-screen pb-32'>
      <button
        onClick={(e) => history.goBack()}
        className='flex items-center flex-row m-4 py-2 px-4 bg-green-700 text-lg text-white shadow-md rounded-lg w-max'
      >
        <RiArrowGoBackFill className='text-lg font-bold' />
        <span className='text-lg font-bold ml-2'>Back</span>
      </button>
      <Comment codeId={codeId} />
    </div>
  );
}