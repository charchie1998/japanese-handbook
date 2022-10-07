import React, { Fragment } from 'react'
import { useState } from 'react';
import Topics from "../common/Topics/Topics";
import SearchBar from '../common/SearchBar/SearchBar';
import LevelSelect from '../common/LevelSelect/LevelSelect'

const Grammar = () => {
    // let search = '';

    // GET THIS items using service
    const items = [
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
        },
        {
            id: 4,
            level: "N5",
            name: "まで",
            meaning: "until",
            examples: [
                "銀行までどうやっていきますか。",
            ]
        },
        {
            id: 5,
            level: "N5",
            name: "から",
            meaning: "from",
            examples: [
                "午前八時から午後五時までにはたらきます。",
            ]
        },
        {
            id: 6,
            level: "N5",
            name: "ています",
            meaning: "-ing",
            examples: [
                "本を読んでいます。",
            ]
        }
    ];

    const [ grammar ] = useState(items);
    // console.log(grammar);

    return (
        <Fragment>
            <SearchBar></SearchBar>
            <LevelSelect></LevelSelect>
            <Topics params={grammar}></Topics>
        </Fragment>
    )
}

export default Grammar;