import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Image } from 'react-bootstrap';
import SteiermarkAccordion from "../Accordion/Accordion";
import './Home.css'

function Home() {
    return (
        <div>
            <Image src="/images/steiermark.jpg" className="centered-image" fluid alt="Landschaftsaufnahme aus der Südsteiermark" />
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