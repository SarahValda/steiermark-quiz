import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './Home.css';

function Home() {
    return (
        <div>
            <h1 className="quiz-title">Interaktives Steiermark-Quiz</h1>
            <h2 className="quiz-subtitle">Entdecken Sie die Schönheit und Geschichte der Steiermark</h2>
            <div className="card-container">
                <Card className="custom-card">
                    <Card.Img variant="top" src="/images/geschichte.jpg" />
                    <Card.Body>
                        <Card.Title className="module-title">Geschichte der Steiermark</Card.Title>
                        <Card.Text>
                            Erfahren Sie mehr über die faszinierende Geschichte der Steiermark.
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
                        <Card.Text>
                            Entdecken Sie die vielfältigen kulinarischen Spezialitäten der Steiermark.
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
                        <Card.Text>
                            Lernen Sie berühmte Persönlichkeiten kennen, die aus der Steiermark stammen.
                        </Card.Text>
                        <Link to="/persoenlichkeiten">
                            <Button variant="primary">Mehr erfahren</Button>
                        </Link>
                    </Card.Body>
                </Card>
                {/* Weitere Cards für andere Module */}
            </div>
        </div>
    );
}

export default Home;