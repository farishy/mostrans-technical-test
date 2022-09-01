import {
  Container,
  Form,
  Button,
  Col,
  Card,
  Badge,
  Row,
} from "react-bootstrap";
import { useQuery, gql } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { CharContext } from "../App";
import { useContext, useState } from "react";

const Location = () => {
  const GET_LOCATIONS = gql`
    query getAllLocations {
      locations {
        results {
          id
          name
          created
        }
      }
    }
  `;
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  const char = useContext(CharContext);
  const [locationSelected, setLocationSelected] = useState(0);

  if (loading)
    return (
      <div>
        <Container>
          <Form.Select className="skeleton">
            <option>All Location</option>
          </Form.Select>
        </Container>
      </div>
    );

  if (error) return <p>Error :</p>;
  console.log(char);

  return (
    <div>
      <Container>
        <Button variant="link" className="my-3" onClick={() => navigate(-1)}>
          <BsFillArrowLeftCircleFill className="me-2" /> Back to Previous
        </Button>
        <div className="feature-title">Characters By Location</div>
        <Form.Control
          as="select"
          value={locationSelected}
          onChange={(e) => {
            console.log("e.target.value", e.target.value);
            setLocationSelected(e.target.value);
          }}
        >
          {data.locations.results.map(({ id, name }) => (
            <option value={id}>{name}</option>
          ))}
        </Form.Control>
        <Row xs={1} md={3} xl={4} className="g-4 mt-3 mb-5">
          {char.map(({ id, name, status, image, species, location }) => (
            <Link
              to="/mostrans-technical-test/character/details"
              style={{ textDecoration: "none", color: "black" }}
              state={{ idCharacter: id }}
            >
              <Col className={location.id == locationSelected ? "" : "d-none"}>
                <Card>
                  <Card.Img variant="top" src={image} />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <div className="d-inline-flex justify-content-arround">
                      <Badge bg="primary" className="me-1">
                        {species}
                      </Badge>{" "}
                      {status === "Alive" ? (
                        <Badge bg="success">{status}</Badge>
                      ) : (
                        <Badge bg="secondary">{status}</Badge>
                      )}
                    </div>
                    <Card.Text className="mt-2">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Link>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Location;
