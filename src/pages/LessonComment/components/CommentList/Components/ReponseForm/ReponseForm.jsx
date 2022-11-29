import React from 'react';
import actioncable from 'actioncable';
// import $ from 'jquery';

import baseUrl from '../../../../../../services/BaseUrl';

export default class ReponseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      commentResponses: [],
    };
    this.cable = actioncable.createConsumer('ws://82.165.206.170/ws');
  }

  componentDidMount() {
    this.fetchCommentResponses();
    this.createSubscription();
    this.props.countCommentResponse(this.state.commentResponses.length);
  }

  fetchCommentResponses = () => {
    // console.log(this.props.commentId);
    fetch(baseUrl() + '/comment_response/' + this.props.commentId)
      .then((res) => res.json())
      .then((comments) => {
        this.setState({ commentResponses: comments });
        this.props.countCommentResponse(this.state.commentResponses.length);
        // console.log(this.state.commentResponses);
        this.props.getCommentResponse(this.state.commentResponses);
      });
  };

  createSubscription = () => {
    this.cable.subscriptions.create(
      { channel: 'CommentResponsesChannel' },
      {
        received: (comments) => {
          // console.log('KKKKKKKK', comments);
          this.handleReceivedMessage(comments);
        },
      }
    );
  };

  handleReceivedMessage = (comment) => {
    // console.log('TONGA ATO VE LE COMMENTS', comment);
    // console.log(this.props.commentId, comment.comment_id);
    if (this.props.commentId === comment.comment_id) {
      this.setState({
        commentResponses: [...this.state.commentResponses, comment],
      });
    }

    this.props.countCommentResponse(this.state.commentResponses.length);
    this.props.countCommentResponse(this.state.commentResponses.length);
    this.props.getCommentResponse(this.state.commentResponses);
    // console.log('Comment vaovao', this.state.commentResponses);
  };

  handleMessageSubmit = (e) => {
    e.preventDefault();
    const messageObj = {
      content: this.state.message,
      comment_id: this.props.commentId,
      student_id: this.props.studentId,
    };
    // console.log('KHKHKJHKJHKJHKJ', messageObj);
    const fetchObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageObj),
    };
    fetch(baseUrl() + '/comment_responses', fetchObj);
    e.target.reset();
  };

  render() {
    return (
      <form
        onSubmit={(e) => {
          this.handleMessageSubmit(e);
        }}
      >
        <div className="h-full w-full flex flex-wrap content-end justify-center">
          <input type="hidden" />
          <textarea
            className="w-2/3 shadow-inner p-4 border-0 mb-4 rounded-lg focus:shadow-outline text-1xl shadow-lg"
            placeholder="Votre reponse :)"
            cols="1"
            rows="2"
            id="comment_content"
            spellcheck="false"
            onChange={(e) => {
              this.setState({ message: e.target.value });
            }}
          ></textarea>
          <button className="font-bold py-2 px-4 w-full md:w-1/2 bg-green-700 text-lg text-white shadow-md rounded-lg ">
            Repondre{' '}
          </button>
        </div>
      </form>
    );
  }
}
