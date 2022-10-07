import { Routes, Route } from 'react-router-dom';

import Home from './Home/Home';
import Kanji from './Kanji/Kanji';
import Vocabulary from './Vocabulary/Vocabulary';
import Grammar from './Grammar/Grammar';

const Contents = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/kanji" element={<Kanji />} />
            <Route path="/vocabulary" element={<Vocabulary />} />
            <Route path="/grammar" element={<Grammar />} />
        </Routes>
    );
}

export default Contents;