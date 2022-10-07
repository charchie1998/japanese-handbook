import React, { Fragment } from 'react'
import { useEffect, useState } from 'react';
import { Tasdad } from "../common/Items/Items";

const Grammar = () => {
    let search = '';

    const [grammar, setGrammar] = useState([]);

    useEffect(() => {
        setGrammar([
            {
                id: 1,
                level: "N5",
                name: "まで",
                meaning: "until",
                examples: [
                    "銀行までどうやっていきますか。",
                ]
            },
            {
                id: 2,
                level: "N5",
                name: "から",
                meaning: "from",
                examples: [
                    "午前八時から午後五時までにはたらきます。",
                ]
            },
            {
                id: 3,
                level: "N5",
                name: "ています",
                meaning: "-ing",
                examples: [
                    "本を読んでいます。",
                ]
            }
        ])
    }, [])

    return (
        <Fragment>
            <p>This is Grammar</p>
            <Tasdad grammar></Tasdad>
        </Fragment>
    )
}

export default Grammar;