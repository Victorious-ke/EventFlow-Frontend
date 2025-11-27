import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import events from "../api/events.json";
import users from "../api/users.json";
import rsvps from "../api/rsvps.json";
import comments from "../api/comments.json";

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [eventRSVPs, setEventRSVPs] = useState([]);
  const [eventComments, setEventComments] = useState([]);

  useEffect(() => {
    const selectedEvent = events.find((e) => e.id === parseInt(id));
    setEvent(selectedEvent);

    const rsvpList = rsvps.filter((r) => r.event_id === parseInt(id));
    setEventRSVPs(rsvpList);

    const commentList = comments.filter((c) => c.event_id === parseInt(id));
    setEventComments(commentList);
  }, [id]);

  if (!event) return <p>Loading event...</p>;

  const host = users.find((u) => u.id === event.host_id);
  const eventDate = new Date(event.date_time).toLocaleString();

  return (
    <div className="event-detail">
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p><strong>Date:</strong> {eventDate}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Host:</strong> {host ? host.username : "Unknown"}</p>

      <section className="rsvp-section">
        <h3>RSVPs</h3>
        <ul>
          {eventRSVPs.map((rsvp) => {
            const user = users.find((u) => u.id === rsvp.user_id);
            return (
              <li key={rsvp.id}>
                {user?.username || "Unknown"} — {rsvp.status}
              </li>
            );
          })}
        </ul>
      </section>

      <section className="comments-section">
        <h3>Comments</h3>
        {eventComments.length > 0 ? (
          <ul>
            {eventComments.map((c) => {
              const user = users.find((u) => u.id === c.user_id);
              return (
                <li key={c.id}>
                  <strong>{user?.username || "Anonymous"}:</strong> {c.content}
                  <br />
                  <small>{new Date(c.created_at).toLocaleString()}</small>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>No comments yet.</p>
        )}
      </section>
    </div>
  );
};

export default EventDetail;
