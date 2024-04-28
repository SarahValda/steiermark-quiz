import React from 'react';
import InteractiveMap from '../InteractiveMap/InteractiveMap';
import QuizModule from '../QuizModule/QuizModule';
import quizData from '../../data/quizData';

/**
 * Die KulinarikModule-Komponente zeigt ein Modul mit kulinarischen Informationen über die Steiermark an.
 * Sie enthält eine interaktive Karte und ein Quiz zur Kulinarik.
 */

function KulinarikModule() {
    return (
        <div>
            <h2 className="h2">Kulinarisches aus der Steiermark</h2>
            <InteractiveMap />
            <QuizModule title="Kulinarik-Quiz" questions={quizData.kulinarik} />
        </div>
    );
}

export default KulinarikModule;