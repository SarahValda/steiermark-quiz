// src/components/GeschichteModule.js
import React from 'react';
import MemoryGame from "../MemoryGame/MemoryGame";
import QuizModule from '../QuizModule/QuizModule';
import quizData from '../../data/quizData';

function PersoenlichkeitenModule() {
    return (
        <div className="module geschichte">
            <h2>Bekannte Persönlichkeite aus der Steiermark</h2>
            <MemoryGame />
            <QuizModule title="Persöhnlichkeiten-Quiz" questions={quizData.persoenlichkeiten} />
        </div>
    );
}

export default PersoenlichkeitenModule;