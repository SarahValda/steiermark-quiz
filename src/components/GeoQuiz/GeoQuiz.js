import React, { useState, useCallback, useEffect } from 'react';
import geoData from "../../data/geoData";
import './GeoQuiz.css';

const GeoQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = useCallback((option) => {
        const isCorrect = option === geoData[currentQuestion].answer;
        if (isCorrect) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < geoData.length) {
            setCurrentQuestion(nextQuestion);
        } else {
        }
    }, [currentQuestion, score]);

    useEffect(() => {
        if (currentQuestion === geoData.length) {
            alert(`Quiz beendet! Du hast ${score} von ${geoData.length} Punkten erreicht.`);
        }
    }, [currentQuestion, score]);

    return (
        <div className="quiz">
            <p className="quiz-subtitle">Schnappschüsse aus der Steiermark: Ein Quiz, das deine Geografie-Kenntnisse herausfordert</p>
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
        </div>
    );
}

export default GeoQuiz;