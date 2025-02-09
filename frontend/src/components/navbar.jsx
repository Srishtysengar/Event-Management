import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

const NavbarComp = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("authToken"));

  const isLoggedIn = localStorage.getItem("authToken") !== null;
  console.log("helo"+ isLoggedIn);

  useEffect(() => {
    setLoggedIn(!!localStorage.getItem("authToken"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setLoggedIn(false); // Update state
    navigate("/login");
  };
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="navbar-Containers">
      <Container>
        <div className="logo-brand">
          <Navbar.Brand href="/">Event Master</Navbar.Brand>
          <Navbar.Brand href="/">by Srishty</Navbar.Brand>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Nav>
          <Nav.Link as={Link} to={"/home"}>
            {" "}
            Home{" "}
          </Nav.Link>
          <Nav.Link as={Link} to={"/upcomingEvents"}>
            Events
          </Nav.Link>

          <Nav className="ms-auto">
            {loggedIn ? (
              <Button variant="outline-light" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Nav.Link href="/login">Logout</Nav.Link>
            )}
          </Nav>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
