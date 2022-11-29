import React, { useState, useEffect } from 'react';
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';
import { useQuery, useMutation } from '@apollo/client';

import { STUDENT_NAME } from '../../../../../../services/queries/StudentsQueries';

import {
  CRV_BY_CR,
  CRV_BY_CR_AND_STUDENT,
} from '../../../../../../services/queries/CommentResponseVoteQueries';

import {
  CREATE_COMMENT_RESPONSE_VOTE,
  DESTROY_COMMENT_RESPONSE_VOTE,
} from '../../../../../../services/mutations/MutationsCommentResponseVote';

export default function ReponseList(props) {
  const { loading: STDloading, error: STDerror, data: STDdata } = useQuery(
    STUDENT_NAME(props.studentId)
  );

  // console.log('ID RESP', props.commentRespId);
  // console.log('ID CURRENT STUD', props.studentId2);

  const {
    loading: CRVBYCRloading,
    error: CRVBYCRerror,
    data: CRVBYCRdata,
  } = useQuery(CRV_BY_CR(props.commentRespId));

  const {
    loading: CRVBYCRSTDloading,
    error: CRVBYCSTDRerror,
    data: CRVBYCRSTDdata,
  } = useQuery(CRV_BY_CR_AND_STUDENT(props.commentRespId, props.studentId2));

  const [createCommentResponseVote, { data }] = useMutation(
    CREATE_COMMENT_RESPONSE_VOTE
  );

  const [destroyCommentResponseVote] = useMutation(
    DESTROY_COMMENT_RESPONSE_VOTE
  );

  const [voteCount2, setVoteCount2] = useState(0);
  const [voteIsUpdated2, setVoteIsUpdated2] = useState(false);
  const [unvote2, setUnvote2] = useState(false);

  // console.log(voteCount2);
  // CRVBYCRSTDdata && CRVBYCRSTDdata.crvByCrIdAndStudentId !== null

  useEffect(() => {
    if (CRVBYCRdata && voteIsUpdated2 === false) {
      setVoteCount2(CRVBYCRdata.crvByCrId.length);
      if (CRVBYCRSTDdata) {
        if (CRVBYCRSTDdata.crvByCrIdAndStudentId.length === 1) {
          // console.log(
          //   'GGGGGGGGGGGGGG',
          //   CRVBYCRSTDdata.crvByCrIdAndStudentId.length
          // );
          setVoteIsUpdated2(true);
          setUnvote2(true);
        } else if (CRVBYCRSTDdata.crvByCrIdAndStudentId.length === 0) {
          setVoteIsUpdated2(false);
          setUnvote2(false);
        }
      }
    }
  });

  if (STDloading) return <p>Loading...</p>;
  if (STDerror) return <p>error :(</p>;
  // if (STDdata) console.log(STDdata);

  if (CRVBYCRloading) return <p>Loading...</p>;
  if (CRVBYCRerror) return <p>error :(</p>;
  // if (CRVBYCRdata) console.log(CRVBYCRdata);

  if (CRVBYCRSTDloading) return <p>Loading...</p>;
  if (CRVBYCSTDRerror) return <p>error :(</p>;
  // if (CRVBYCRSTDdata) console.log(CRVBYCRSTDdata);
  // console.log(unvote2);

  return (
    <div className='w-full bg-white rounded-lg p-3  flex flex-col justify-center  md:items-start shadow-md mb-4 mx-auto clear-right'>
      <div className='flex flex-row justify-center mr-2 '>
        <img
          alt='avatar'
          width='48'
          height='48'
          className='rounded-full w-10 h-10 mr-4 shadow-lg mb-4'
          src={STDdata.student.image}
        />
        <div>
          <h3 className='text-purple-600 font-semibold text-md text-left '>
            @{STDdata.student.name}
          </h3>
          <p className='text-gray-600 text-md text-left'>{props.content}</p>
          <div className='text-gray-600 text-left'>
            <button
              className='cursor-pointer'
              onClick={(e) => {
                if (unvote2 == false) {
                  createCommentResponseVote({
                    ignoreResults: false,
                    variables: {
                      commentResponseId: props.commentRespId,
                      studentId: props.studentId2,
                      typeVote: 'vote',
                    },
                  });
                  setVoteCount2(voteCount2 + 1);
                  setVoteIsUpdated2(true);
                  setUnvote2(true);
                  setTimeout(() => window.location.reload(), 500);
                }
              }}
            >
              <RiArrowUpSLine className='inline' size='2em' />
            </button>
            <span className='text-gray-600 text-sm'>{voteCount2}</span>
            <button
              className='cursor-pointer'
              onClick={(e) => {
                if (unvote2 == true && voteCount2 >= 1) {
                  destroyCommentResponseVote({
                    variables: {
                      commentResponseId: props.commentRespId,
                      studentId: props.studentId2,
                    },
                  });
                  setVoteCount2(voteCount2 - 1);
                  setUnvote2(false);
                  setTimeout(() => window.location.reload(), 500);
                }
              }}
            >
              <RiArrowDownSLine className='inline' size='2em' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
