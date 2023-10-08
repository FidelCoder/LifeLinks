import React from 'react';
import './ProposedEvents.scss';

const ProposedEvents = ({ events }) => {
    return (
        <div className="proposed-events">
            <h3>Proposed Events</h3>
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

export default ProposedEvents;
