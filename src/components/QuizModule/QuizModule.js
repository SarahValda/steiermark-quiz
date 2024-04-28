import React, { useState } from 'react';
import './QuizModule.css';

/**
 * Die QuizModule-Komponente ist verantwortlich für die Darstellung eines Quiz-Moduls.
 * Sie zeigt eine Liste von Fragen an und ermöglicht es dem Benutzer, Antworten auszuwählen.
 * Am Ende des Quiz werden die Ergebnisse angezeigt, einschließlich der Punktzahl und der korrekten Antworten.
 *
 * @param {string} title - Der Titel des Quiz-Moduls.
 * @param {Array<Object>} questions - Eine Liste von Frage-Objekten, jedes mit einer Frage, einer Liste von Antworten und der korrekten Antwort.
 */
function QuizModule({ title, questions }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [showResults, setShowResults] = useState(false);

    /**
     * Verarbeitet die Auswahl einer Antwort.
     * @param {string} selectedAnswer - Die ausgewählte Antwort.
     */
    const handleAnswer = (selectedAnswer) => {
        const nextQuestionIndex = currentQuestionIndex + 1;
        setUserAnswers(userAnswers.concat([{
            question: questions[currentQuestionIndex].question,
            answer: selectedAnswer,
            correctAnswer: questions[currentQuestionIndex].correct
        }]));

        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
        } else {
            setShowResults(true);
        }
    };

    /**
     * Berechnet die Gesamtpunktzahl des Benutzers.
     * @returns {number} - Die Gesamtpunktzahl.
     */
    const calculateScore = () => {
        return userAnswers.reduce((score, answer) => {
            return score + (answer.answer === answer.correctAnswer ? 1 : 0);
        }, 0);
    };

    return (
        <div className="quiz-module">
            <h2>{title}</h2>
            {!showResults ? (
                <div className="question">
                    <p>{questions[currentQuestionIndex].question}</p>
                    {questions[currentQuestionIndex].answers.map((answer, index) => (
                        <button key={index} onClick={() => handleAnswer(answer)}>
                            {answer}
                        </button>
                    ))}
                </div>
            ) : (
                <div className="results">
                    <h3>Quiz Ergebnisse</h3>
                    <p>Deine Punktzahl: {calculateScore()} von {questions.length}</p>
                    <div>
                        {userAnswers.map((userAnswer, index) => (
                            <div key={index} className="result-detail">
                                <p>{userAnswer.question}</p>
                                <p className={userAnswer.answer === userAnswer.correctAnswer ? "correct-answer" : "wrong-answer"}>
                                    Deine Antwort: {userAnswer.answer} (Richtige Antwort: {userAnswer.correctAnswer})
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default QuizModule;