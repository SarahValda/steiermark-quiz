import React from 'react';
import GeoQuiz from "../GeoQuiz/GeoQuiz";
import QuizModule from '../QuizModule/QuizModule';
import quizData from '../../data/quizData';

/**
 * Die GeografieModule-Komponente zeigt das Modul zur Geografie der Steiermark an.
 * Sie besteht aus einem interaktiven Bilderrätsel und einem Quiz zur Geografie.
 */

function GeografieModule() {
    return (
        <div>
            <h2 className="h2">Die Geografie der Steiermark</h2>
            <GeoQuiz />
            <QuizModule title="Geografie-Quiz" questions={quizData.geografie} />
        </div>
    );
}

export default GeografieModule;