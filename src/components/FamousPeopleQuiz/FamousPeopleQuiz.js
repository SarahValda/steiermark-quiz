import React, { useState } from 'react';

function FamousPeopleQuiz() {
    const [guessedPeople, setGuessedPeople] = useState([]);
    const [guessedQuotes, setGuessedQuotes] = useState([]);

    const handleGuessPerson = (personName) => {
        setGuessedPeople([...guessedPeople, personName]);
    };

    const handleGuessQuote = (quote, correctPerson) => {
        setGuessedQuotes([...guessedQuotes, { quote, correctPerson }]);
    };

    return (
        <div>
            <h2>Berühmte Persönlichkeiten Quiz: Wer bin ich?</h2>
            <div>
                <h3>Bilderrätsel:</h3>
                {/* Hier könntest du Bilder von berühmten Persönlichkeiten anzeigen und Benutzer müssen raten, wer sie sind */}
                <div>
                    <img src="person1.jpg" alt="Person 1" onClick={() => handleGuessPerson('Person 1')} />
                    {/* Weitere Bilder hier einfügen */}
                </div>
            </div>
            <div>
                <h3>Zitatezuordnung:</h3>
                {/* Hier könntest du Zitate berühmter Persönlichkeiten anzeigen und Benutzer müssen das Zitat der richtigen Person zuordnen */}
                <div>
                    <p>"Das Leben ist wie eine Schachtel Pralinen, man weiß nie, was man bekommt."</p>
                    <button onClick={() => handleGuessQuote('Forrest Gump', 'Tom Hanks')}>Tom Hanks</button>
                    <button onClick={() => handleGuessQuote('Forrest Gump', 'Arnold Schwarzenegger')}>Arnold Schwarzenegger</button>
                    {/* Weitere Zitate und Buttons hier einfügen */}
                </div>
            </div>
            <div>
                {/* Hier könntest du die vom Benutzer erratenen Persönlichkeiten und Zitate anzeigen */}
                <h3>Erratene Persönlichkeiten:</h3>
                <ul>
                    {guessedPeople.map((person, index) => (
                        <li key={index}>{person}</li>
                    ))}
                </ul>
                <h3>Erratene Zitate:</h3>
                <ul>
                    {guessedQuotes.map((item, index) => (
                        <li key={index}>
                            <strong>Zitat:</strong> {item.quote}, <strong>Korrekte Person:</strong> {item.correctPerson}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default FamousPeopleQuiz;