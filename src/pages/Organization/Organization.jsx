import React, { useState, useEffect } from 'react';
import './OrganizationDashboard.scss';

const OrganizationDashboard = () => {
    const [organization, setOrganization] = useState({});
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [ticketValidationLog, setTicketValidationLog] = useState([]);
    const [announcement, setAnnouncement] = useState("");

    useEffect(() => {
        // Fetch organization details
        // Simulating fetching from an API
        const fetchedOrganization = {
            id: '123',
            name: 'Sample Organization',
            description: 'This is a sample organization.',
        };
        setOrganization(fetchedOrganization);

        // Fetch upcoming events
        const fetchedEvents = [
            { name: 'Event 1', date: '2023-10-01' },
            { name: 'Event 2', date: '2023-10-10' },
        ];
        setUpcomingEvents(fetchedEvents);

        // Fetch ticket validation logs
        const fetchedLogs = [
            { ticketId: 'T001', validationDate: '2023-09-23 14:00' },
            { ticketId: 'T002', validationDate: '2023-09-23 15:00' },
        ];
        setTicketValidationLog(fetchedLogs);

    }, []);

    const postAnnouncement = () => {
        // Post announcement to your backend or handle accordingly
        console.log(announcement);
    };

    return (
        <div className="organization-dashboard">
            <div className="header">
                <h2>{organization.name}</h2>
                <p>{organization.description}</p>
            </div>
            <div className="upcoming-events">
                <h3>Upcoming Events</h3>
                <ul>
                    {upcomingEvents.map((event, index) => (
                        <li key={index}>
                            <p>{event.name}</p>
                            <p>{event.date}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="ticket-sales">
                <h3>Ticket Sales</h3>
                <div className="chart-placeholder">Chart visualization of sales here (integration with a chart library needed).</div>
            </div>
            <div className="ticket-validation-log">
                <h3>Ticket Validation Log</h3>
                <ul>
                    {ticketValidationLog.map((log, index) => (
                        <li key={index}>
                            <p>{log.ticketId}</p>
                            <p>{log.validationDate}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="announcements">
                <h3>Announcements</h3>
                <textarea 
                    value={announcement} 
                    onChange={(e) => setAnnouncement(e.target.value)} 
                    placeholder="Type your announcement...">
                </textarea>
                <button onClick={postAnnouncement}>Post Announcement</button>
            </div>
        </div>
    );
};

export default OrganizationDashboard;
