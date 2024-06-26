import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import SteiermarkAccordion from "../Accordion/Accordion";
import './Home.css'

/**
 * Die Home-Komponente ist die Startseite der Anwendung.
 * Sie präsentiert eine Auswahl von Modulen, die es dem Benutzer ermöglichen, verschiedene Aspekte der Steiermark zu erkunden.
 * Jedes Modul besteht aus einem Bild, einem kurzen Text und einem Link, der den Benutzer zu einer detaillierten Ansicht des jeweiligen Themas führt.
 * Unter den Modulen befindet sich auch ein Akkordeon-Menü, das zusätzliche Informationen über die Steiermark bereitstellt.
 */

function Home() {
    return (
        <div>
            <h1 className="quiz-title">Interaktives Steiermark-Quiz</h1>
            <h2 className="quiz-subtitle">Entdecke die Steiermark: Von majestätischen Bergen bis zu kulinarischen Köstlichkeiten – Ein interaktives Erlebnis durch Geschichte, Geografie, Kultur und bekannte Persönlichkeiten.</h2>
            <div className="card-container">
                <Card className="custom-card">
                    <Card.Img variant="top" src="/images/geschichte.jpg" />
                    <Card.Body>
                        <Card.Title className="module-title">Geschichte der Steiermark</Card.Title>
                        <Card.Text className="module-text">
                            Erfahre mehr über die faszinierende Geschichte der Steiermark.
                        </Card.Text>
                        <Link to="/geschichte">
                            <Button variant="primary">Mehr erfahren</Button>
                        </Link>
                    </Card.Body>
                </Card>
                <Card className="custom-card">
                    <Card.Img variant="top" src="/images/kulinarik.jpg" />
                    <Card.Body>
                        <Card.Title className="module-title">Kulinarik der Steiermark</Card.Title>
                        <Card.Text className="module-text">
                            Entdecke die vielfältigen kulinarischen Spezialitäten der Steiermark.
                        </Card.Text>
                        <Link to="/kulinarik">
                            <Button variant="primary">Mehr erfahren</Button>
                        </Link>
                    </Card.Body>
                </Card>
                <Card className="custom-card">
                    <Card.Img variant="top" src="/images/persoenlichkeiten.jpg" />
                    <Card.Body>
                        <Card.Title className="module-title">Bekannte Persönlichkeiten</Card.Title>
                        <Card.Text className="module-text">
                            Lerne berühmte Persönlichkeiten kennen, die aus der Steiermark stammen.
                        </Card.Text>
                        <Link to="/persoenlichkeiten">
                            <Button variant="primary">Mehr erfahren</Button>
                        </Link>
                    </Card.Body>
                </Card>
                <Card className="custom-card">
                    <Card.Img variant="top" src="/images/geografie.jpg" />
                    <Card.Body>
                        <Card.Title className="module-title">Geografie der Steiermark</Card.Title>
                        <Card.Text className="module-text">
                            Entdecke die Vielfalt: Von majestätischen Bergen bis zu sanften Weinbergen.
                        </Card.Text>
                        <Link to="/geografie">
                            <Button variant="primary">Mehr erfahren</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
            <SteiermarkAccordion />
        </div>
    );
}

export default Home;