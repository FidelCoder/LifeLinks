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

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Simulate fetching data.
        const fetchedData = {
            upcoming: [],
            past: [],
            cancelled: [],
            proposed: []
        };
        setEventsData(fetchedData);
    }, []);

    const handleEventSubmission = (event) => {
        event.preventDefault();
        const newEvent = {
            id: Math.random(),
            date: event.target.date.value,
            time: event.target.time.value,
            title: event.target.title.value,
            description: event.target.description.value,
            venue: event.target.venue.value,
            regularTickets: event.target.regularTickets.value,
            vipTickets: event.target.vipTickets.value,
            coupleTickets: event.target.coupleTickets.value,
            guestsAndSpeakers: event.target.guestsAndSpeakers.value.split(',').map(item => item.trim()),
            mainArtist: event.target.mainArtist.value
        };
        setEventsData(prevData => ({ ...prevData, upcoming: [...prevData.upcoming, newEvent] }));
        setShowModal(false);
    };

    return (
        <div className="events-page">
            <Sidebar />
            <div className="content">
                <h2>Events</h2>
                <button onClick={() => setShowModal(true)}>Create Event</button>
                <div className="events-grid">
                    <UpcomingEvents events={eventsData.upcoming} />
                    <PastEvents events={eventsData.past} />
                    <CancelledEvents events={eventsData.cancelled} />
                    <ProposedEvents events={eventsData.proposed} />
                </div>

                {showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                            <h3>Create an Event</h3>
                            <form onSubmit={handleEventSubmission}>
                                <label>Date:</label>
                                <input type="date" name="date" required />

                                <label>Time:</label>
                                <input type="time" name="time" required />

                                <label>Title:</label>
                                <input type="text" name="title" required />

                                <label>Description:</label>
                                <textarea name="description" required></textarea>

                                <label>Venue:</label>
                                <input type="text" name="venue" required />

                                <label>Number of Regular Tickets:</label>
                                <input type="number" name="regularTickets" required />

                                <label>Number of VIP Tickets:</label>
                                <input type="number" name="vipTickets" required />

                                <label>Number of Couple Tickets:</label>
                                <input type="number" name="coupleTickets" required />

                                <label>Guests and Speakers (comma separated):</label>
                                <input type="text" name="guestsAndSpeakers" required />

                                <label>Main Artist or Relevant Person:</label>
                                <input type="text" name="mainArtist" required />

                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventsPage;
