import React from 'react'
import { Card } from "@mui/material";
import { useState } from 'react';

const Topic = ({params}) => {
  const [ topic ] = useState(params);

  const openTopic = () => {
    console.log(topic.name);
  }

  return (
    <Card onClick={openTopic}>
      { topic.name }
    </Card>
  )
}

export default Topic;