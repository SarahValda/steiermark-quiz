import React from 'react';
import InteractiveMap from '../InteractiveMap/InteractiveMap';
import QuizModule from '../QuizModule/QuizModule';
import quizData from '../../data/quizData';
import './KulinarikModule.css';

function KulinarikModule() {
    return (
        <div className="module-kulinarik">
            <h2 className="h2">Kulinarisches aus der Steiermark</h2>
            <InteractiveMap />
            <QuizModule title="Kulinarik-Quiz" questions={quizData.kulinarik} />
        </div>
    );
}

export default KulinarikModule;
