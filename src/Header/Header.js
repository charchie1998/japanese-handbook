import React, { useEffect, useState, Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material'

const Header = () => {
    const [ headers, setHeaders ] = useState([]);

    useEffect(() => {
        const preHeaders = [{
            id: "home",
            name: "Home"
        }, {
            id: "kanji",
            name: "Kanji"
        }, {
            id: "grammar",
            name: "Grammar"
        }, {
            id: "vocabulary",
            name: "Vocabulary"
        }]

        setHeaders(preHeaders);
    }, []);

    return (
        <Fragment>
            {
                headers.map(header => (
                    <NavLink key={header.id} to={"/" + header.id}>
                        <Button key={header.id}>{ header.name }</Button>
                    </NavLink>
                ))
            }
        </Fragment>
    )
}

export default Header;