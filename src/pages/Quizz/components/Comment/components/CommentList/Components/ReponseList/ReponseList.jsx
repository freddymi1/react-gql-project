import React, { useState, useEffect } from 'react';
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';
import { useQuery, useMutation } from '@apollo/client';

import { STUDENT_NAME } from '../../../../../../../../services/queries/StudentsQueries';

import {
  CRV_BY_CR,
  CRV_BY_CR_AND_STUDENT,
} from '../../../../../../../../services/queries/CommentResponseVoteQueries';

import {
  CREATE_COMMENT_RESPONSE_VOTE,
  DESTROY_COMMENT_RESPONSE_VOTE,
} from '../../../../../../../../services/mutations/MutationsCommentResponseVote';

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

  // console.log('UNVOTE:', unvote2, 'VOTECOUNT', voteCount2);

  useEffect(() => {
    if (CRVBYCRdata && voteIsUpdated2 === false) {
      setVoteCount2(CRVBYCRdata.crvByCrId.length);
      if (CRVBYCRSTDdata && CRVBYCRSTDdata.crvByCrIdAndStudentId !== null) {
        // console.log('GGGGGGGGGGGGGG', cvbsacData);
        setVoteIsUpdated2(true);
        // setUnvote2(true);
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
          <h3 className='text-purple-600 font-semibold text-md text-center md:text-left '>
            @{STDdata.student.name}
          </h3>
          <p className='text-gray-600 text-lg text-center md:text-left'>
            {props.content}
          </p>
          <div className='text-gray-600'>
            <a
              href='#'
              onClick={(e) => {
                if (unvote2 === false) {
                  createCommentResponseVote({
                    ignoreResults: false,
                    variables: {
                      commentResponseId: props.commentRespId,
                      studentId: props.studentId2,
                    },
                  });
                  setVoteCount2(voteCount2 + 1);
                  setVoteIsUpdated2(true);
                  setUnvote2(true);
                }
              }}
            >
              <RiArrowUpSLine className='inline' size='2em' />
            </a>
            <span className='text-gray-600 text-sm'>{voteCount2}</span>
            <a
              href='#'
              onClick={(e) => {
                if (unvote2 === true && voteCount2 >= 1) {
                  destroyCommentResponseVote({
                    variables: {
                      commentResponseId: props.commentRespId,
                      studentId: props.studentId2,
                    },
                  });
                  setVoteCount2(voteCount2 - 1);
                  setUnvote2(false);
                }
              }}
            >
              <RiArrowDownSLine className='inline' size='2em' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
