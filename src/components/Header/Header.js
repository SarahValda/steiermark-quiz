import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div className="navbar">
            <Link to="/" className="navbar-brand"></Link>
            <div>
                <Link to="/">Home</Link>
                <Link to="/geschichte">Geschichte</Link>
                <Link to="/kulinarik">Kulinarik</Link>
                {/* Weitere Links hinzufügen */}
            </div>
        </div>
    );
}

export default Header;
