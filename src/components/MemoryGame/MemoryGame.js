import React, { useState, useEffect } from 'react';
//import './MemoryGame.css';

const MemoryGame = ({ cards }) => {
    // Zustand für das aktuelle Spiel
    const [openCards, setOpenCards] = useState([]);
    const [matched, setMatched] = useState([]);
    const [moves, setMoves] = useState(0);

    // Funktion zum Mischen der Karten
    const shuffleCards = () => {
        const shuffledCards = [...cards, ...cards]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }));

        setMatched([]);
        setOpenCards([]);
        setMoves(0);
        return shuffledCards;
    };

    // Zustand für die gemischten Karten
    const [shuffledCards, setShuffledCards] = useState(shuffleCards);

    // Klick-Handler
    const handleCardClick = (index) => {
        if (openCards.length === 1 && !openCards.includes(index)) {
            setMoves(moves + 1);
            setOpenCards([...openCards, index]);
        } else if (openCards.length === 0) {
            setOpenCards([index]);
        }
    };

    // Überprüfung der Karten nach dem Öffnen
    useEffect(() => {
        if (openCards.length === 2) {
            const firstMatch = shuffledCards[openCards[0]];
            const secondMatch = shuffledCards[openCards[1]];

            if (firstMatch.src === secondMatch.src) {
                setMatched([...matched, firstMatch.src]);
            }

            if (openCards.length === 2) {
                setTimeout(() => setOpenCards([]), 800);
            }
        }
    }, [openCards]);

    // Neustart des Spiels
    const restartGame = () => {
        setShuffledCards(shuffleCards());
    };

    return (
        <div className="memory-game">
            <button onClick={restartGame}>Neustart</button>
            <div className="cards-grid">
                {shuffledCards.map((card, index) => {
                    let isFlipped = false;
                    if (openCards.includes(index)) isFlipped = true;
                    if (matched.includes(card.src)) isFlipped = true;

                    return (
                        <div
                            className={`memory-card ${isFlipped ? 'flipped' : ''}`}
                            key={card.id}
                            onClick={() => handleCardClick(index)}
                        >
                            <img className="front-face" src={card.src} alt={card.name} />
                            <div className="back-face">?</div>
                        </div>
                    );
                })}
            </div>
            {matched.length === cards.length && (
                <div className="winner-message">
                    Glückwunsch! Du hast alle Paare mit {moves} Zügen gefunden.
                </div>
            )}
        </div>
    );
};

export default MemoryGame;
