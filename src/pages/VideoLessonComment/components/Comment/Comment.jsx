import React from 'react';
import actioncable from 'actioncable';
import $ from 'jquery';
import baseUrl from '../../../../services/BaseUrl';
import CommentList from '../CommentList/CommentList';

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
    this.fetchLessonVideoComments();
    this.createSubscription();
  }

  fetchLessonVideoComments = () => {
    fetch(
      baseUrl() +
        '/student_x_comment_x_lesson_video/' +
        this.props.lessonVideoId
    )
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
      { channel: 'StudentXCommentXLessonVideosChannel' },
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
      lesson_video_id: this.props.lessonVideoId,
      student_id: JSON.parse(currentUser).data.data.id,
    };
    const fetchObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageObj),
    };
    fetch(baseUrl() + '/student_x_comment_x_lesson_videos', fetchObj);
    e.target.reset();
  };

  render() {
    return (
      <div className='text-center transform m-5'>
        <div>
          <div
            className='block relative w-full overflow-auto'
            id='comments'
            style={{ height: '60vh' }}
          >
            {this.state.comments.map((comment) => (
              <CommentList
                key={comment.comment.id}
                comment={comment}
                studentId={JSON.parse(currentUser).data.data.id}
                studentImage={comment.student.image}
              />
            ))}
          </div>
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

export default Comment;
