import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './Timeline.css';

const initialEvents = [
    { id: 'event-1', description: 'Gründung des Stiftes Rein', year: 1122 },
    { id: 'event-2', description: 'Gründung der Technischen Universität Graz', year: 1811 },
    { id: 'event-3', description: 'Beginn der industriellen Revolution in der Steiermark', year: 1830 },
    { id: 'event-4', description: 'Schlacht bei Wagram während der Napoleonischen Kriege', year: 1809 },
    { id: 'event-5', description: 'Ferdinand II. wird Erzherzog der Steiermark', year: 1564 },
    { id: 'event-6', description: 'Erste Erwähnung von Graz', year: 1180 },
    { id: 'event-7', description: 'Eröffnung der Südbahn', year: 1844 }
];

function Timeline() {
    const [events, setEvents] = useState([...initialEvents]);
    const [validationResult, setValidationResult] = useState('');
    const [resultColor, setResultColor] = useState('');

    const onDragEnd = (result) => {
        const { source, destination } = result;
        if (!destination || (source.droppableId === destination.droppableId && source.index === destination.index)) {
            return;
        }

        const newEvents = Array.from(events);
        const [removed] = newEvents.splice(source.index, 1);
        newEvents.splice(destination.index, 0, removed);
        setEvents(newEvents);
    };

    const checkOrder = () => {
        const currentOrder = events.map(event => event.year);
        const correctOrder = [...initialEvents].sort((a, b) => a.year - b.year).map(event => event.year);
        if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
            setValidationResult('Richtig! Die Anordnung ist korrekt.');
            setResultColor('green-text');
        } else {
            setValidationResult('Leider falsch. Versuche es bitte noch einmal.');
            setResultColor('red-text');
        }
    };

    const resetGame = () => {
        setEvents([...initialEvents]);
        setValidationResult('');
    };

    return (
        <div>
            <p className="quiz-subtitle">Teste dein Wissen: Bringe die historischen Ereignisse in die richtige Reihenfolge beginnend mit dem
                frühesten Ereignis.</p>
            <div className="timeline-container">
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="events">
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                {events.map((event, index) => (
                                    <Draggable key={event.id} draggableId={event.id} index={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className="event-card"
                                            >
                                                {event.description}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
                <div className="timeline-image-container">
                    <img src="/images/timeline.png" alt="Timeline" className="timeline-image"/>
                </div>
                <div className="button-container">
                    <button onClick={checkOrder} className="verify-button">Bestätigen</button>
                    <button onClick={resetGame} className="reset-button">Zurücksetzen</button>
                </div>
                {validationResult && <p className={`validation-result ${resultColor}`}>{validationResult}</p>}
            </div>
        </div>
    );
}

export default Timeline;