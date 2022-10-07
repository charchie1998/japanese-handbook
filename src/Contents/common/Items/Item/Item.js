import React from 'react'
import { Card } from "@mui/material";
import { useState } from 'react';
import { useEffect } from 'react';

const TestItem = (Item) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    setItem(Item)
  }, [])
  return (
    <Card>
      { item.name }
    </Card>
  )
}

export default TestItem;