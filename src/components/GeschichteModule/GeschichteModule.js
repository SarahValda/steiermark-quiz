import React from 'react';
import Timeline from '../Timeline/Timeline';
import QuizModule from '../QuizModule/QuizModule';
import quizData from '../../data/quizData';

/**
 * Die GeschichteModule-Komponente ist verantwortlich für die Darstellung des Moduls zur Geschichte der Steiermark.
 * Sie enthält eine Überschrift, eine Zeitachse (Timeline) und ein Quiz-Modul, das dem Benutzer ermöglicht, sein Wissen über die Geschichte der Steiermark zu testen.
 */

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