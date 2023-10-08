import React from 'react';
//import './EventItem.scss';

const EventItem = ({ event }) => {
    return (
        <div className="event-item">
            <h3>{event.name}</h3>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
            <p>Description: {event.description}</p>
        </div>
    );
};

export default EventItem;
