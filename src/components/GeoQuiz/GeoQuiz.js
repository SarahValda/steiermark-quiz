import React, { useState, useCallback } from 'react';
import geoData from "../../data/geoData";
import './GeoQuiz.css';

/**
 * GeoQuiz Komponente: Ein interaktives Quiz, das Nutzern Geografiefragen präsentiert.
 * Nutzer können die Geografie der Steiermark anhand von Bildern erkunden und Fragen dazu beantworten.
 */
const GeoQuiz = () => {
    // Zustandsvariablen für die Verwaltung des Quiz-Status.
    const [currentQuestion, setCurrentQuestion] = useState(0); // Aktuelle Frageindex
    const [score, setScore] = useState(0); // Anzahl der korrekt beantworteten Fragen
    const [showResults, setShowResults] = useState(false); // Status, um die Ergebnisse anzuzeigen

    /**
     * Behandelt das Klicken auf eine Antwortoption.
     * Überprüft die Korrektheit der Antwort und aktualisiert den Score bzw. Frageindex.
     * @param {string} option - Die gewählte Antwortoption.
     */
    const handleAnswerOptionClick = useCallback((option) => {
        const isCorrect = option === geoData[currentQuestion].answer;
        if (isCorrect) {
            setScore(score + 1); // Erhöhen des Scores bei korrekter Antwort
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < geoData.length) {
            setCurrentQuestion(nextQuestion); // Nächste Frage laden, falls verfügbar
        } else {
            setShowResults(true); // Ergebnisse anzeigen, wenn keine weiteren Fragen vorhanden sind
        }
    }, [currentQuestion, score]);

    /**
     * Setzt das Quiz zurück und startet es neu.
     */
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