import React, { useState } from 'react';
import './InteractiveMap.css';
import kulinarikData from "../../data/kulinarikData";

function InteractiveMap() {
    const [selectedSpecialty, setSelectedSpecialty] = useState(null);

    const handleRegionClick = (specialty) => {
        setSelectedSpecialty(specialty === selectedSpecialty ? null : specialty);
    };

    return (
        <div className="map-container">
            <img src="/images/steiermark-map.webp" alt="Steiermark Karte" style={{width: '30%', height: 'auto'}}/>
            <button id="button-graz" className="map-button"
                    onClick={() => handleRegionClick(kulinarikData.regions[0].specialty)}>
                Graz
            </button>
            <button id="button-ausseerland" className="map-button"
                    onClick={() => handleRegionClick(kulinarikData.regions[1].specialty)}>
                Ausseerland
            </button>
            <button id="button-erzberg-leoben" className="map-button"
                    onClick={() => handleRegionClick(kulinarikData.regions[2].specialty)}>
                Erzberg-Leoben
            </button>
            <button id="button-gesaeuse" className="map-button"
                    onClick={() => handleRegionClick(kulinarikData.regions[3].specialty)}>
                Gesäuse
            </button>
            <button id="button-hochsteiermark" className="map-button"
                    onClick={() => handleRegionClick(kulinarikData.regions[4].specialty)}>
                Hochsteiermark
            </button>
            <button id="button-murau" className="map-button"
                    onClick={() => handleRegionClick(kulinarikData.regions[5].specialty)}>
                Murau
            </button>
            <button id="button-murtal" className="map-button"
                    onClick={() => handleRegionClick(kulinarikData.regions[6].specialty)}>
                Murtal
            </button>
            <button id="button-oststeiermark" className="map-button"
                    onClick={() => handleRegionClick(kulinarikData.regions[7].specialty)}>
                Oststeiermark
            </button>
            <button id="button-schladming-dachstein" className="map-button"
                    onClick={() => handleRegionClick(kulinarikData.regions[8].specialty)}>
                Schladming-Dachstein
            </button>
            <button id="button-suedsteiermark" className="map-button"
                    onClick={() => handleRegionClick(kulinarikData.regions[9].specialty)}>
                Südsteiermark
            </button>
            <button id="button-thermen-vulkanland" className="map-button"
                    onClick={() => handleRegionClick(kulinarikData.regions[10].specialty)}>
                Thermen -& Vulkanland
            </button>
            {/* Weitere Buttons für andere Regionen */}
            {selectedSpecialty && (
                <div className="map-popup" style={{
                    top: '10%',
                    left: '32%'
                }}> {/* Popup kann auch relativ zu den Buttons positioniert werden */}
                    <h4>{selectedSpecialty.name}</h4>
                    <img src={selectedSpecialty.image} alt={selectedSpecialty.name} style={{width: '100px'}}/>
                    <p>{selectedSpecialty.description}</p>
                </div>
            )}
        </div>
    );
}


export default InteractiveMap;
