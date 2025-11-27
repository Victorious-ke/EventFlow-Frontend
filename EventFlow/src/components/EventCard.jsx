import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  const eventDate = new Date(event.date_time).toLocaleString();

  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p><strong> Location:</strong> {event.location}</p>
      <p><strong> Date & Time:</strong> {eventDate}</p>
      <Link to={`/events/${event.id}`} className="btn">
        View Details
      </Link>
    </div>
  );
};

export default EventCard;
