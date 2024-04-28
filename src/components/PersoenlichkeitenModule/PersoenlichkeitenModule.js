import React from 'react';
import MemoryGame from "../MemoryGame/MemoryGame";
import QuizModule from '../QuizModule/QuizModule';
import quizData from '../../data/quizData';

/**
 * Die PersoenlichkeitenModule-Komponente zeigt ein Modul mit bekannten Persönlichkeiten aus der Steiermark an.
 * Sie enthält ein Memory-Spiel und ein Quiz zu Persönlichkeiten.
 */

function PersoenlichkeitenModule() {
    return (
        <div className="module geschichte">
            <h2 className="h2">Bekannte Persönlichkeiten aus der Steiermark</h2>
            <MemoryGame />
            <QuizModule title="Persönlichkeiten-Quiz" questions={quizData.persoenlichkeiten} />
        </div>
    );
}

export default PersoenlichkeitenModule;