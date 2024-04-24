import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="navbar">
            <Link to="/" className="navbar-brand"></Link>
            <div>
                <Link to="/">Home</Link>
                <Link to="/geschichte">Geschichte</Link>
                <Link to="/kulinarik">Kulinarik</Link>
                <Link to="/persoenlichkeiten">Persönlichkeiten</Link>
                <Link to="/geografie">Geografie</Link>
            </div>
        </div>
    );
}

export default Header;
