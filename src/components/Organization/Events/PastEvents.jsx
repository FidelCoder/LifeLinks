// PastEvents.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './PastEvents.scss';

const PastEvents = ({ events }) => (
    <div className="past-events">
        <h3>Past Events</h3>
        <ul>
            {events.map((event, index) => (
                <li key={index}>
                    <span className="event-title">{event.title}</span>
                    <span className="event-date">{event.date}</span>
                </li>
            ))}
        </ul>
    </div>
);

PastEvents.propTypes = {
    events: PropTypes.array.isRequired
};

export default PastEvents;
