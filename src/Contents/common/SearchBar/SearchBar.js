import { TextField } from '@mui/material';
import React, { Fragment } from 'react'

const SearchBar = () => {
    return (
        <Fragment>
            <TextField id="outlined-basic" label="Search" variant='outlined'/>
        </Fragment>
    )
}

export default SearchBar;