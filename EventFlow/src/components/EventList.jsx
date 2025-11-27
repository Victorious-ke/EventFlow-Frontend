import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import eventsData from "../api/events.json";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulate fetching events (replace with fetch('/events') when backend ready)
    setEvents(eventsData);
  }, []);

  return (
    <div className="event-list">
      <h2>Upcoming Events</h2>
      <div className="event-grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
