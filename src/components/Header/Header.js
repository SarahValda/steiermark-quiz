import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Die Header-Komponente dient zur Navigation innerhalb der Anwendung.
 * Sie enthält Links zu verschiedenen Modulen der Steiermark-Quiz-Anwendung.
 */

function Header() {
    return (
        <div className="navbar">
            <Link to="/" className="navbar-brand"></Link>
            <div>
                <Link to="/">Startseite</Link>
                <Link to="/geschichte">Geschichte</Link>
                <Link to="/kulinarik">Kulinarik</Link>
                <Link to="/persoenlichkeiten">Persönlichkeiten</Link>
                <Link to="/geografie">Geografie</Link>
            </div>
        </div>
    );
}

export default Header;