import React from 'react';
import './CancelledEvents.scss';

const CancelledEvents = ({ events }) => {
    return (
        <div className="cancelled-events">
            <h3>Cancelled Events</h3>
            <ul>
                {events.map(event => (
                    <li key={event.id}>
                        <span className="event-date">{event.date}</span>
                        <span className="event-title">{event.title}</span>
                        <span className="event-description">{event.description}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CancelledEvents;
