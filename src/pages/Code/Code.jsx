import React from 'react';

import { useQuery } from "@apollo/client";
import { ALL_CODES } from "../../services/queries/CodeQueries";
import { CodeComponent } from './Components/CodeComponent';



export default function Code() {
  const [showModal, setShowModal] = React.useState(false);
  const { loading, error, data } = useQuery(ALL_CODES)

  if (loading) return (<h2>LOADING...</h2>)
  if (error) return (<h2>ERROR</h2>)

  return( <CodeComponent showModal={ showModal } setShowModal={ setShowModal } allCodes={ data.allCodes } /> )
}