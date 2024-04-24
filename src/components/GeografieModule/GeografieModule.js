import React from 'react';
import GeoQuiz from "../GeoQuiz/GeoQuiz";
import QuizModule from '../QuizModule/QuizModule';
import quizData from '../../data/quizData';

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