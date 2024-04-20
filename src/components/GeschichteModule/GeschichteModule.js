import React from 'react';
import Timeline from '../Timeline/Timeline';  // Importiere die spezifische Timeline für Geschichte
import QuizModule from '../QuizModule/QuizModule';
import quizData from '../../data/quizData'; // Stelle sicher, dass hier spezifische Daten für Geschichte stehen

function GeschichteModule() {
    return (
        <div className="module geschichte">
            <h2 className="h2">Die Geschichte der Steiermark</h2>
            <Timeline />
            <QuizModule title="Geschichte-Quiz" questions={quizData.geschichte} />
        </div>
    );
}

export default GeschichteModule;