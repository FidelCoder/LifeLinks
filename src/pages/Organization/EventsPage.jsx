import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import UpcomingEvents from '../../components/Organization/Events/UpcomingEvents';
import PastEvents from '../../components/Organization/Events/PastEvents';
import CancelledEvents from '../../components/Organization/Events/CancelledEvents';
import ProposedEvents from '../../components/Organization/Events/ProposedEvents';
import './EventsPage.scss';

const EventsPage = () => {
    const [eventsData, setEventsData] = useState({
        upcoming: [],
        past: [],
        cancelled: [],
        proposed: []
    });

    useEffect(() => {
        // Simulate fetching data.
        const fetchedData = {
            upcoming: [
                // Here, you can add simulated data or fetch from an API in the future.
            ],
            past: [],
            cancelled: [],
            proposed: []
        };
        setEventsData(fetchedData);
    }, []);

    return (
        <div className="events-page">
            <Sidebar />
            <div className="content">
                <h2>Events</h2>
                <div className="events-grid">
                    <UpcomingEvents events={eventsData.upcoming} />
                    {/* Uncomment these lines as you integrate other event types. */}
                    <PastEvents events={eventsData.past} />
                    <CancelledEvents events={eventsData.cancelled} />
                    <ProposedEvents events={eventsData.proposed} />
                   
                </div>
                {/* Analysis and Reviews sections can be added below. */}
            </div>
        </div>
    );
};

export default EventsPage;
