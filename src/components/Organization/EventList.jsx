import React from 'react';
import EventItem from './EventItem';
//import './EventList.scss';

const EventList = ({ title, events = [] }) => { // Set a default value for events
    return (
        <section className="event-list">
            <h3>{title}</h3>
            {events && events.map((event, index) => <EventItem key={index} event={event} />)}
        </section>
    );
};

EventList.defaultProps = { // Set default props
    events: [],
};

export default EventList;
