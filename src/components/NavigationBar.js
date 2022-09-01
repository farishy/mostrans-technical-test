import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Link to="/mostrans-technical-test/" style={{ textDecoration: "none" }}>
          <Navbar.Brand>
            <img
              src={logo}
              alt="logo"
              width="30"
              height="30"
              className="d-inline-block align-top me-3"
            />
            Mostrans Technical Test
          </Navbar.Brand>
        </Link>
        <Link to="/mostrans-technical-test/characters/location">
          <Nav className="me-auto">
            Character By Location
          </Nav>
        </Link>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
