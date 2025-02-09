import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import NavbarComp from "../components/navbar";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <NavbarComp />
      <section className="home-about">
        <div className="home-container-inner">
          <div className="home-header">
            <h1 className="home-title">Event Master</h1>
            <button
              className="event-button"
              onClick={() => navigate("/eventform")}
            >
              <FaPlus className="icon" /> Create Event
            </button>
          </div>

          <div className="home-content">
            <div className="home-mission">
              <h2>Our Mission</h2>
              <p>
                We strive to simplify event planning by offering a cutting-edge
                platform that connects event organizers, vendors, and attendees
                effortlessly.
              </p>
            </div>

            <div className="home-services">
              <h2>Our Services</h2>
              <ul>
                <li>End-to-end Event Planning</li>
                <li>Vendor and Venue Management</li>
                <li>Online Ticket Booking</li>
                <li>Guest List Management</li>
                <li>Real-time Event Updates</li>
              </ul>
            </div>

            <div className="home-why-choose">
              <h2>Why Choose Us?</h2>
              <p>
                We provide a seamless, tech-driven event planning experience
                with real-time updates, a user-friendly interface, and dedicated
                customer support.
              </p>
            </div>

            <div className="home-team">
              <h2>Meet Our Team</h2>
              <p>
                Our team consists of experienced event planners, tech experts,
                and customer support professionals working together to make your
                events successful.
              </p>
            </div>
          </div>

          <div className="home-contact">
            <h2>Contact Us</h2>
            <p>
              Have any questions? Reach out to us at{" "}
              <a href="mailto:info@eventmaster.com">info@eventmaster.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
