import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div>
            <h1 className="h1">Interaktives Steiermark-Quiz</h1>
            <div>
                <Link to="/geschichte">
                    <div>
                        <h2 className="h2">Geschichte der Steiermark</h2>
                        {/* Optional: Bild oder Kurzbeschreibung */}
                    </div>
                </Link>
                <Link to="/kulinarik">
                    <div>
                        <h3 className="h3">Kulinarik der Steiermark</h3>
                        {/* Optional: Bild oder Kurzbeschreibung */}
                    </div>
                </Link>
                {/* Weitere Links für andere Module */}
            </div>
        </div>
    );
}

export default Home;
