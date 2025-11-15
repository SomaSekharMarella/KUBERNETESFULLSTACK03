import React, { useEffect, useState } from "react";

function Events() {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({
    eventName: "",
    description: "",
    speakers: "",
    date: "",
    totalMembersAttended: ""
  });
  const [editingId, setEditingId] = useState(null);

  const BASE_URL = "http://localhost:2030/tbh-backend/api/events";

  // Fetch events from backend
  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.error(err));
  }, []);

  // Handle form input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit form (Add or Update)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      // UPDATE existing event
      fetch(`${BASE_URL}/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })
        .then(res => res.json())
        .then(updatedEvent => {
          setEvents(events.map(ev => (ev.id === editingId ? updatedEvent : ev)));
          resetForm();
          setEditingId(null);
        })
        .catch(err => console.error(err));
    } else {
      // ADD new event
      fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })
        .then(res => res.json())
        .then(newEvent => {
          setEvents([...events, newEvent]);
          resetForm();
        })
        .catch(err => console.error(err));
    }
  };

  // Edit event
  const handleEdit = (event) => {
    setForm({
      eventName: event.eventName,
      description: event.description,
      speakers: event.speakers,
      date: event.date,
      totalMembersAttended: event.totalMembersAttended
    });
    setEditingId(event.id);
  };

  // Delete event
  const handleDelete = (id) => {
    fetch(`${BASE_URL}/${id}`, { method: "DELETE" })
      .then(() => setEvents(events.filter(ev => ev.id !== id)))
      .catch(err => console.error(err));
  };

  // Reset form
  const resetForm = () => {
    setForm({
      eventName: "",
      description: "",
      speakers: "",
      date: "",
      totalMembersAttended: ""
    });
  };

  return (
    <div>
      <h2>Events</h2>

      {/* Event List */}
      <ul>
        {events.map((ev) => (
          <li key={ev.id}>
            <b>{ev.eventName}</b> ({ev.date}) <br />
            {ev.description && <i>{ev.description}</i>} <br />
            Speakers: {ev.speakers} <br />
            Attended: {ev.totalMembersAttended} members
            <br />
            <button onClick={() => handleEdit(ev)} style={{ marginRight: "10px" }}>
              Edit
            </button>
            <button onClick={() => handleDelete(ev.id)}>Delete</button>
            <hr />
          </li>
        ))}
      </ul>

      {/* Add / Edit Form */}
      <h3>{editingId ? "Edit Event" : "Add New Event"}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="eventName" placeholder="Event Name" value={form.eventName} onChange={handleChange} required />
        <br />
        <textarea name="description" placeholder="Description (optional)" value={form.description} onChange={handleChange} />
        <br />
        <input type="text" name="speakers" placeholder="Speakers" value={form.speakers} onChange={handleChange} />
        <br />
        <input type="date" name="date" value={form.date} onChange={handleChange} required />
        <br />
        <input type="number" name="totalMembersAttended" placeholder="Total Members Attended" value={form.totalMembersAttended} onChange={handleChange} required />
        <br />
        <button type="submit">{editingId ? "Update Event" : "Add Event"}</button>
        {editingId && (
          <button type="button" onClick={resetForm} style={{ marginLeft: "10px" }}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}

export default Events;
