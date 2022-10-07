import React, { Fragment } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Grid } from '@mui/material'

import { testItem } from './Item/Item'

const Tasdad = (Items) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(Items);
    }, []);

    return (
        <Fragment>
            <Grid container spacing={2}>
                {
                    items.map(_item => {
                        <Grid item xs={3}>
                            <testItem _item></testItem>
                        </Grid>
                    })
                }
            </Grid>
        </Fragment>
    )
}

export default Tasdad;