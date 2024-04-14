import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialData = [
    { id: 'event-1', year: 1122, description: 'Gründung des Stiftes Rein' },
    { id: 'event-2', year: 1180, description: 'Erste Erwähnung von Graz' },
    { id: 'event-3', year: 1564, description: 'Ferdinand II. wird Erzherzog der Steiermark' },
    { id: 'event-4', year: 1809, description: 'Schlacht bei Wagram während der Napoleonischen Kriege' }
];

function App() {
    const [events, setEvents] = useState(initialData);

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

    return (
        <div className="timeline-wrapper">
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="timeline">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {events.map((event, index) => (
                                <Draggable key={event.id} draggableId={event.id} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className="event-container"
                                        >
                                            <div className="event-year">{event.year}</div>
                                            <div className="event-description">{event.description}</div>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}

export default App;
