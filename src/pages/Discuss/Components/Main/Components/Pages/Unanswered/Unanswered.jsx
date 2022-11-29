import React, { useState } from 'react';
import Discuss1 from './Component/Discuss1/Discuss1';
import { useQuery } from '@apollo/client';
import {
  COMMENTS_BY_ANSWER,
  COUNT_COMMENTS,
} from '../../../../../../../services/queries/CommentsQueries';

export default function Unanswered() {
  const [page, setPage] = useState(1);
  const perPage = 5;

  const {
    loading: commentLoading,
    error: commentError,
    data: commentData,
  } = useQuery(COMMENTS_BY_ANSWER(page, perPage));

  const {
    loading: countLoading,
    error: countError,
    data: countData,
  } = useQuery(COUNT_COMMENTS);

  if (commentLoading) return <p>Loading...</p>;
  if (commentError) return <p>Error :(</p>;
  if (commentData) console.log(commentData);

  if (countLoading) return <p>Loading...</p>;
  if (countError) return <p>Error :(</p>;
  if (countData) console.log(countData.countComments);

  const countPage = Math.ceil(countData.countComments / perPage);

  function range(start, stop) {
    let res = [];
    res.unshift(start);
    for (let i = start; i < stop; i++) {
      res.push((start += 1));
    }
    return res;
  }

  const countPageArray = range(1, countPage);
  console.log(countPageArray);

  //   console.log(countPage);

  const pageNumber = countPageArray.map((i) => {
    // return (
    //   <button
    //     className='w-8 h-8 cursor-pointer bg-green-400 text-center text-lg font-bold text-white hover:bg-gray-500'
    //     style={{ lineHeight: '2rem' }}
    //     onClick={() => setPage(i)}
    //   >
    //     {i}
    //   </button>
    // );

    if (i == page) {
      return (
        <button
          className='w-8 h-8 cursor-pointer bg-gray-500 text-center text-lg font-bold text-white'
          style={{ lineHeight: '2rem' }}
          onClick={() => setPage(i)}
        >
          {page}
        </button>
      );
    } else {
      return (
        <button
          className='w-8 h-8 cursor-pointer bg-green-400 text-center text-lg font-bold text-white'
          style={{ lineHeight: '2rem' }}
          onClick={() => setPage(i)}
        >
          {i}
        </button>
      );
    }
  });

  const discussArray = commentData.commentsByAnswer.map((comment) => {
    return (
      <Discuss1
        key={comment.id}
        comment={comment}
        nbr_vote={comment.commentVotes.length}
        nbr_resp={comment.commentResponses.length}
        content={comment.content}
        types={comment.types}
        createdAt={comment.createdAt}
      />
    );
  });

  console.log(discussArray);

  console.log(`page n*: ${page}`);

  return (
    <>
      <div className='w-full space-y-4'>
        {discussArray}

        {/* <Discuss1 /> */}
        <div className='flex flex-row'>
          <div className='mx-auto justify-center space-x-2'>
            {/* Pagination */}
            {pageNumber}
            {/* fin de la pagination */}
          </div>
        </div>
      </div>
    </>
  );
}
