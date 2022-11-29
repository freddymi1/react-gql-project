import React, { useState, useRef, useEffect } from 'react';
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';
import { useQuery, useMutation } from '@apollo/client';

import {
  COMMENT_VOTE_BY_COMMENT_ID,
  COMMENT_VOTE_BY_STUDENT_ID_AND_COMMENT_ID,
} from '../../../../../../services/queries/CommentVoteQueries';
import {
  CREATE_COMMENT_VOTE,
  DESTROY_COMMENT_VOTE,
} from '../../../../../../services/mutations/CommentVoteMutations';

import './Response.css';
import ReponseList from './Components/ReponseList/ReponseList';
import ReponseForm from './Components/ReponseForm/ReponseForm';

const CommentList = (props) => {
  const [active, setActive] = useState('');
  const [height, setHeight] = useState('0px');
  const [rotate, setRotate] = useState('reponse_icon');

  const content = useRef(null);

  function toggleAccordion() {
    setActive(active === '' ? 'active' : '');
    setHeight(
      active === 'active' ? '0px' : `${content.current.scrollHeight}px`
    );
    setRotate(active === 'active' ? 'reponse_icon' : 'reponse_icon rotate');
    // console.log(content.current.scrollHeight);
  }
  const { data: commentVoteByCommentIdData } = useQuery(
    COMMENT_VOTE_BY_COMMENT_ID,
    {
      variables: { commentId: props.comment.comment.id },
    }
  );
  const { data: cvbsacData } = useQuery(
    COMMENT_VOTE_BY_STUDENT_ID_AND_COMMENT_ID,
    {
      variables: {
        commentId: props.comment.comment.id,
        studentId: props.studentId,
      },
    }
  );
  const [voteCount, setVoteCount] = useState(0);
  const [voteIsUpdated, setVoteIsUpdated] = useState(false);
  const [unvote, setUnvote] = useState(false);
  const [createCommentVote, { data }] = useMutation(CREATE_COMMENT_VOTE);
  const [destroyCommentVote] = useMutation(DESTROY_COMMENT_VOTE);

  const [countCommentResp, setCountCommentResp] = useState(0);
  const [commentResponse, setCommentResponse] = useState([]);

  useEffect(() => {
    if (commentVoteByCommentIdData && voteIsUpdated === false) {
      setVoteCount(commentVoteByCommentIdData.commentVoteByCommentId.length);
      if (
        cvbsacData &&
        cvbsacData.commentVoteByStudentIdAndCommentId !== null
      ) {
        // console.log('GGGGGGGGGGGGGG', cvbsacData);
        setVoteIsUpdated(true);
        setUnvote(true);
      }
    }
  });

  const commentResp = [];
  commentResponse.map((cr) => {
    // console.log(cr);
    commentResp.push(
      <ReponseList
        key={cr.id}
        content={cr.content}
        studentId={cr.student_id}
        commentRespId={cr.id}
        studentId2={props.studentId}
      />
    );
  });

  // console.log(props.studentImage);

  return (
    <div className="w-full bg-white rounded-lg p-3  justify-center  md:items-start shadow-md mb-4 mx-auto clear-right">
      <div className="w-full flex flex-row justify-center mr-2 ">
        <img
          alt="avatar"
          width="48"
          height="48"
          className="rounded-full w-10 h-10 mr-4 shadow-lg mb-4"
          src={props.studentImage}
        />
        <div className="w-full">
          <h3 className="text-purple-600 font-semibold text-lg text-center md:text-left ">
            @{props.comment.student.name}
          </h3>
          <p className="text-gray-600 text-lg text-center md:text-left">
            {props.comment.comment.content}
          </p>

          <div className="reponse_section w-full">
            <div className="reponse w-full">
              <div className="reponse_title">
                <div className="text-gray-600">
                  <button
                    onClick={(e) => {
                      if (unvote === false) {
                        createCommentVote({
                          ignoreResults: false,
                          variables: {
                            commentId: props.comment.comment.id,
                            studentId: props.studentId,
                          },
                        });
                        setVoteCount(voteCount + 1);
                        setVoteIsUpdated(true);
                        setUnvote(true);
                      }
                    }}
                  >
                    <RiArrowUpSLine className="inline" size="2em" />
                  </button>
                  <span className="text-gray-600 text-sm">{voteCount}</span>
                  <button
                    onClick={(e) => {
                      if (unvote === true) {
                        destroyCommentVote({
                          variables: {
                            commentId: props.comment.comment.id,
                            studentId: props.studentId,
                          },
                        });
                        setVoteCount(voteCount - 1);
                        setUnvote(false);
                      }
                    }}
                  >
                    <RiArrowDownSLine className="inline" size="2em" />
                  </button>
                </div>
                <label
                  className={`responsebtn ${active} cursor-pointer text-sm text-gray-500 ml-4 rounded-sm px-2 py-1 shadow-sm`}
                  onClick={toggleAccordion}
                >
                  Reponse {countCommentResp}
                </label>
              </div>
            </div>
            <div
              ref={content}
              style={{ maxHeight: `${height}` }}
              className="reponse_content"
            >
              <div className=" px-4">
                <div className="w-full overflow-y-auto h-auto">
                  <div className="p-4 mb-4 bg-gray-200">
                    <label className="text-gray-500 text-md font-semibold p-4">
                      Liste des reponses associe a cette commentaire
                    </label>
                  </div>
                  {commentResp}
                </div>
              </div>
              <ReponseForm
                countCommentResponse={setCountCommentResp}
                commentId={props.comment.comment.id}
                studentId={props.studentId}
                getCommentResponse={setCommentResponse}
                commentId={props.comment.comment.id}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentList;
