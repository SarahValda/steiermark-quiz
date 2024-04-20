import React, { useState, useEffect } from 'react';
import './MemoryGame.css';
import peopleData from "../../data/peopleData";

const MemoryGame = () => {
    const [openCards, setOpenCards] = useState([]);
    const [matched, setMatched] = useState([]);
    const [moves, setMoves] = useState(0);
    const [cards, setCards] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState({});

    useEffect(() => {
        shuffleCards();
    }, []);

    const shuffleCards = () => {
        const formattedCards = peopleData.reduce((acc, item) => [
            ...acc,
            { ...item, src: item.src1, id: Math.random() },
            { ...item, src: item.src2, id: Math.random() }
        ], []);

        const shuffledCards = formattedCards.sort(() => Math.random() - 0.5);
        setCards(shuffledCards);
        setMatched([]);
        setOpenCards([]);
        setMoves(0);
    };

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