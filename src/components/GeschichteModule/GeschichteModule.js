import React from 'react';
import Timeline from '../Timeline/Timeline';
import QuizModule from '../QuizModule/QuizModule';
import quizData from '../../data/quizData';

function GeschichteModule() {
    return (
        <div>
            <h2 className="h2">Die Geschichte der Steiermark</h2>
            <Timeline />
            <QuizModule title="Geschichte-Quiz" questions={quizData.geschichte} />
        </div>
    );
}

export default GeschichteModule;