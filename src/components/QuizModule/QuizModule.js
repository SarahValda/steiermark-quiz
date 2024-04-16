import React, { useState } from 'react';

function QuizModule({ title, questions }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [showResults, setShowResults] = useState(false);

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
                                <p>Deine Antwort: {userAnswer.answer}</p>
                                <p>Richtige Antwort: {userAnswer.correctAnswer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default QuizModule;