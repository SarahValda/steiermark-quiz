import React, { useState } from 'react';
import './InteractiveMap.css';
import kulinarikData from "../../data/kulinarikData";

/**
 * InteractiveMap Komponente: Ermöglicht Benutzern die Erkundung kulinarischer Spezialitäten der Steiermark.
 * Nutzer können durch Klicken auf Karten-Buttons Informationen zu verschiedenen regionalen Spezialitäten anzeigen.
 *
 * Bitte beachten: Die Karte wird möglicherweise erst nach dem Neuladen der Seite korrekt angezeigt.
 */
function InteractiveMap() {
    // Zustandsvariable, die die aktuell ausgewählte Spezialität speichert oder null, wenn keine ausgewählt ist.
    const [selectedSpecialty, setSelectedSpecialty] = useState(null);

    /**
     * Behandelt Klickereignisse auf die Regions-Buttons auf der Karte.
     * Setzt die ausgewählte Spezialität zurück oder aktualisiert sie basierend auf der Benutzereingabe.
     * @param {Object} specialty - Das Objekt der Spezialität, das beim Klicken auf einen Button übergeben wird.
     */
    const handleRegionClick = (specialty) => {
        setSelectedSpecialty(specialty === selectedSpecialty ? null : specialty);
    };

    return (
        <div>
            <p className="quiz-subtitle">Erkunde die kulinarischen Schätze der Steiermark – Klicke auf die Buttons, um mehr über jede regionale Spezialität zu erfahren.</p>
            <div className="map-container">
                <img src="/images/steiermark-map.webp" alt="Steiermark Karte" style={{width: '50%', height: 'auto'}}/>
                <button id="button-graz" className="map-button"
                        onClick={() => handleRegionClick(kulinarikData.regions[0].specialty)}>
                    +
                </button>
                <button id="button-ausseerland" className="map-button"
                        onClick={() => handleRegionClick(kulinarikData.regions[1].specialty)}>
                    +
                </button>
                <button id="button-erzberg-leoben" className="map-button"
                        onClick={() => handleRegionClick(kulinarikData.regions[2].specialty)}>
                    +
                </button>
                <button id="button-gesaeuse" className="map-button"
                        onClick={() => handleRegionClick(kulinarikData.regions[3].specialty)}>
                    +
                </button>
                <button id="button-hochsteiermark" className="map-button"
                        onClick={() => handleRegionClick(kulinarikData.regions[4].specialty)}>
                    +
                </button>
                <button id="button-murau" className="map-button"
                        onClick={() => handleRegionClick(kulinarikData.regions[5].specialty)}>
                    +
                </button>
                <button id="button-murtal" className="map-button"
                        onClick={() => handleRegionClick(kulinarikData.regions[6].specialty)}>
                    +
                </button>
                <button id="button-oststeiermark" className="map-button"
                        onClick={() => handleRegionClick(kulinarikData.regions[7].specialty)}>
                    +
                </button>
                <button id="button-schladming-dachstein" className="map-button"
                        onClick={() => handleRegionClick(kulinarikData.regions[8].specialty)}>
                    +
                </button>
                <button id="button-suedsteiermark" className="map-button"
                        onClick={() => handleRegionClick(kulinarikData.regions[9].specialty)}>
                    +
                </button>
                <button id="button-thermen-vulkanland" className="map-button"
                        onClick={() => handleRegionClick(kulinarikData.regions[10].specialty)}>
                    +
                </button>
                {selectedSpecialty && (
                    <div className="map-popup">
                        <img src={selectedSpecialty.image} alt={selectedSpecialty.name} style={{width: '100px'}}/>
                        <h4>{selectedSpecialty.name}</h4>
                        <p>{selectedSpecialty.description}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default InteractiveMap;