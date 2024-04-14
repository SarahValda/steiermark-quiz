// src/components/KulinarikModule.js
import React from 'react';
import InteractiveMap from '../InteractiveMap/InteractiveMap';
import QuizModule from '../QuizModule/QuizModule';
import quizData from '../../data/quizData';

function KulinarikModule() {
    return (
        <div className="module-kulinarik">
            <h2>Kulinarik der Steiermark</h2>
            <InteractiveMap />
            <QuizModule title="Kulinarik-Quiz" questions={quizData.kulinarik} />
        </div>
    );
}

export default KulinarikModule;
