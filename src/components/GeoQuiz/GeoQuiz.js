import React, { useState, useCallback } from 'react';
import geoData from "../../data/geoData";
import './GeoQuiz.css';

const GeoQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);  // Zustand, um Ergebnisse anzuzeigen

    const handleAnswerOptionClick = useCallback((option) => {
        const isCorrect = option === geoData[currentQuestion].answer;
        if (isCorrect) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < geoData.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowResults(true);  // Zeige Ergebnisse an, wenn letzte Frage beantwortet wird
        }
    }, [currentQuestion, score]);

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResults(false);
    };

    return (
        <>
            <div>
                <p className="quiz-subtitle">Schnappschüsse aus der Steiermark: Ein Quiz, das deine Geografie-Kenntnisse herausfordert</p>
            </div>
            <div className="quiz">
                {showResults ? (
                    <div className="results">
                        <p className="results-text">Du hast {score} von 6 Bildern richtig erraten.</p>
                        <button className="restart-button" onClick={restartQuiz}>Quiz neu starten</button>
                    </div>
                ) : (
                    <>
                        <img src={geoData[currentQuestion].image} alt="Bild eines Ortes in der Steiermark"/>
                        <div className="options">
                            {geoData[currentQuestion].options.map((option, index) => (
                                <button
                                    onClick={() => handleAnswerOptionClick(option)}
                                    key={index}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                        <div>Frage {currentQuestion + 1} von {geoData.length}</div>
                    </>
                )}
            </div>
        </>
    );
}

export default GeoQuiz;