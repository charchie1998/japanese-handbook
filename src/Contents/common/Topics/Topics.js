import React, { Fragment, useState } from 'react'
import { Grid } from '@mui/material'

import Topic from './Topic/Topic'

const Topics = ({params}) => {
    const [ topics ] = useState(params);

    return (
        <Fragment>
            <Grid container spacing={2}>
                {
                    topics.map(topic => (
                        <Grid item xs={4} key={topic.id}>
                            <Topic params={topic}></Topic>
                        </Grid>
                    ))
                }
            </Grid>
        </Fragment>
    )
}

export default Topics;