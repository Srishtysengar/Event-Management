import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const GuestPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [showPopup, setShowPopup] = useState(false); 

  const navigate = useNavigate();

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!title || !description || !date || !time ) {
      alert("Please fill in all fields");
      return;
    }

    
    setShowPopup(true);

    
    setTitle("");
    setDescription("");
    setDate("");
    setTime("");
  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        
        <h2 className="form-step">Welcome, Guest User!</h2>
        <p style={{ color: "gray", marginBottom: "20px" }}>
          You can explore the event creation process, but your events will not be saved. 
          Register to create real events.
        </p>

        <form onSubmit={handleFormSubmit}>
          <label>
            Title:
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <br />
          <label>
            Description:
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          </label>
          <br />
          <label>
            Date:
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </label>
          <br />
          <label>
            Time:
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
          </label>
          <br />
          <br />
          <button type="submit">Create Event</button>

          <p>
            I want to explore more <Link to={"/register"}>Register</Link>
          </p>
        </form>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Event Created Successfully!</h3>
            <p>This is a demo event and will not be saved.</p>
            <button onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GuestPage;
