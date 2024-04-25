import React, { useState, useEffect } from 'react';
import './MemoryGame.css';
import peopleData from "../../data/peopleData";

/**
 * Eine Memory-Game Komponente, die Spielern ermöglicht, Paare von Karten zu finden und zu entsprechen.
 * Die Karten zeigen bedeutende Persönlichkeiten der Steiermark.
 */
const MemoryGame = () => {
    const [openCards, setOpenCards] = useState([]);  // Positionen der momentan umgedrehten Karten
    const [matched, setMatched] = useState([]);     // Speichert die Quellen der gematchten Karten
    const [moves, setMoves] = useState(0);          // Anzahl der Züge
    const [cards, setCards] = useState([]);         // Aktueller Zustand der Karten
    const [showPopup, setShowPopup] = useState(false);  // Kontrolliert die Anzeige des Pop-ups
    const [popupContent, setPopupContent] = useState({}); // Inhalt des anzuzeigenden Pop-ups

    /**
     * Shuffelt die Karten und initialisiert das Spiel, sobald die Komponente geladen wird.
     */
    useEffect(() => {
        shuffleCards();
    }, []);

    /**
     * Erstellt eine zufällig sortierte Liste von Karten aus den gegebenen Daten.
     */
    const shuffleCards = () => {
        const formattedCards = peopleData.reduce((acc, item) => [
            ...acc,
            { ...item, src: item.src1, id: Math.random() }, // Erstellt zwei Karten für jede Person
            { ...item, src: item.src2, id: Math.random() }
        ], []);

        const shuffledCards = formattedCards.sort(() => Math.random() - 0.5);
        setCards(shuffledCards);
        setMatched([]);
        setOpenCards([]);
        setMoves(0);
    };

    /**
     * Behandelt das Klicken auf eine Karte und bestimmt, ob ein Match gefunden wurde.
     * @param {number} index - Der Index der geklickten Karte.
     */
    const handleCardClick = index => {
        if (!openCards.includes(index) && openCards.length < 2) {
            const newOpenCards = [...openCards, index];
            setOpenCards(newOpenCards);

            if (newOpenCards.length === 2) {
                const [firstIndex, secondIndex] = newOpenCards;
                const firstCard = cards[firstIndex];
                const secondCard = cards[secondIndex];

                if (firstCard.name === secondCard.name) {
                    setMatched([...matched, firstCard.src, secondCard.src]);
                    setPopupContent({
                        name: firstCard.name,
                        description: firstCard.description
                    });

                    setTimeout(() => {
                        setShowPopup(true);
                    }, 500);
                }
                setTimeout(() => {
                    setOpenCards([]);
                }, 1000);
                setMoves(moves + 1);
            }
        }
    };

    /**
     * Schließt das Informations-Popup.
     */
    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div>
            <p className="quiz-subtitle">Entdecke die Gesichter der Steiermark – Wer verbirgt sich hinter den Karten?</p>
            <div className="memory-game">
                <div className="cards-grid">
                    {cards.map((card, index) => {
                        let isFlipped = matched.includes(card.src) || openCards.includes(index);
                        return (
                            <div className={`memory-card ${isFlipped ? 'flipped' : ''}`} key={card.id} onClick={() => handleCardClick(index)}>
                                <img className="front-face" src={card.src} alt={card.name} />
                                <div className="back-face">?</div>
                            </div>
                        );
                    })}
                </div>
                {showPopup && (
                    <div className="popup">
                        <h2>{popupContent.name}</h2>
                        <p>{popupContent.description}</p>
                        <button onClick={closePopup}>Schließen</button>
                    </div>
                )}
                <button onClick={shuffleCards}>Neustart</button>
            </div>
        </div>
    );
};

export default MemoryGame;