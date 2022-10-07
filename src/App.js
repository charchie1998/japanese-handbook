// import logo from './logo.svg';
import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import Header from './Header/Header';
import Contents from './Contents/Contents';
import Footer from './Footer/Footer';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Contents />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
