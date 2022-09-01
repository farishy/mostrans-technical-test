import { Container, Navbar } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Link to="/" style={{ textDecoration: "none" }}>
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
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
