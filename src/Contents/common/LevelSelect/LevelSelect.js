import React, { Fragment } from 'react'
import { ButtonGroup, Button } from '@mui/material'

const LevelSelect = () => {
    return (
        <Fragment>
            <div>
                <ButtonGroup>
                    <Button>N5</Button>
                    <Button>N4</Button>
                    <Button>N3</Button>
                    <Button>N2</Button>
                    <Button>N1</Button>
                </ButtonGroup>
            </div>
        </Fragment>
    )
}

export default LevelSelect;