import React, { useEffect, useState } from "react";
import CustomCard from "../components/customcard";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import NavbarComp from "../components/navbar";
import Container from "react-bootstrap/Container";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4001/api/events");
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="upcoming-events">
      <NavbarComp />

      <Container>
        {/* Search Bar */}
        <div className="search-card-container">
          <Form className="search-form">
            <Row className="align-items-center">
              <Col xs={8}>
                <Form.Control
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </Col>
              <Col xs={4}>
                <Button
                  type="button"
                  className="explore-btn"
                  onClick={() => setSearchTerm("")}
                >
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </div>

        <Row>
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <Col key={index}>
                <CustomCard
                  title={event.title}
                  eventID={event._id}
                  imageSrc="https://media.istockphoto.com/id/974238866/photo/audience-listens-to-the-lecturer-at-the-conference.jpg?s=612x612&w=0&k=20&c=p_BQCJWRQQtZYnQlOtZMzTjeB_csic8OofTCAKLwT0M="
                  content={event.description}
                  date={event.date}
                  time={event.time}
                  venue={event.venue}
                  attendees={event.attendees}
                />
              </Col>
            ))
          ) : (
            <p className="text-center mt-3">No events found</p>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default UpcomingEvents;
