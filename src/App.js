// src/App.js
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import GeschichteModule from './components/GeschichteModule/GeschichteModule';
import KulinarikModule from './components/KulinarikModule/KulinarikModule';
import PersoenlichkeitenModule from './components/PersoenlichkeitenModule/PersoenlichkeitenModule';
//import GeografieModule from './components/GeografieModule';

function App() {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/geschichte" element={<GeschichteModule />} />
                    <Route path="/kulinarik" element={<KulinarikModule />} />
                    <Route path="/persoenlichkeiten" element={<PersoenlichkeitenModule />} />
                    {/* Weitere Routen für andere Module */}
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
