// EventForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarComp from "./navbar";

const EventForm = ({ onEventSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [venue, setVenue] = useState("");
  const [attendees, setAttendees] = useState("");

  const navigate = useNavigate();

  async function handleFormSubmit(e) {
    e.preventDefault();

    if (!title || !description || !date || !time || !venue || !attendees) {
      alert("Please fill in all fields");
      return;
    }

    const response = await fetch("https://event-management-five-pied.vercel.app/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        title,
        description,
        date,
        time,
        venue,
        attendees,
      }),
    });

    const data = await response.json();
    console.log(data);
    navigate("/upcomingEvents");

    setTitle("");
    setDescription("");

    setDate("");
    setTime("");
    setVenue("");
    setAttendees("")
  }

  return (
    <div>
      <NavbarComp />
      <div className="formContainer">
        <div className="formWrapper">
          <h2 className="form-step">Create Event</h2>
          <form onSubmit={handleFormSubmit}>
            <label>
              Title:
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <br />
            <label>
              Description:
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <br />
            <label>
              Date:
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
            <br />
            <label>
              Time:
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </label>
            <br />
            <label>
              Venue:
              <input
                type="text"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
              />
            </label>
            <label>
              Attendees:
              <input
                type="text"
                value={attendees}
                onChange={(e) => setAttendees(e.target.value)}
              />
            </label>
            <br />
            <button type="submit">Create Event</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventForm;
