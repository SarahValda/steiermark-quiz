import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/**
 * Hauptpunkt für das Rendern der React-Anwendung in den DOM.
 * Hier wird die Haupt-App-Komponente in das HTML-Dokument gerendert.
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);