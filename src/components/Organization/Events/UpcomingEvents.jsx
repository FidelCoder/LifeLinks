import React from 'react';
import './UpcomingEvents.scss';

const UpcomingEvents = ({ events }) => {
    return (
        <div className="upcoming-events">
            <h3>Upcoming Events</h3>
            <ul>
                {events.map((event, index) => (
                    <li key={index}>
                        <div className="event-date">{event.date}</div>
                        <div className="event-title">{event.title}</div>
                        <div className="event-description">{event.description}</div>
                        {/* Add other event properties here as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UpcomingEvents;
