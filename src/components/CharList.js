import { Card, Col, Row, Badge, Button } from "react-bootstrap";
import { useQuery, gql } from "@apollo/client";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const CharList = () => {
  const GET_CHARACTERS = gql`
    query getAllCharacter {
      characters {
        results {
          id
          name
          status
          image
          species
        }
      }
    }
  `;

  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading)
    return (
      <div className="container">
        <div className="skeleton skeleton-text mt-5 w-25"></div>
        <div class="card-title skeleton skeleton-text mb-4"></div>
        <Row xs={1} md={3} xl={4} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img className="skeleton" />
                <Card.Body>
                  <Card.Title className="skeleton skeleton-text"></Card.Title>
                  <Card.Text>
                    <div class="card-title skeleton skeleton-text"></div>
                    <div class="card-title skeleton skeleton-text"></div>
                    <div class="card-title skeleton skeleton-text"></div>
                    <div class="card-title skeleton skeleton-text"></div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  if (error) return <p>Error :(</p>;

  return (
    <div className="container">
      <Button variant="link" className="my-3" onClick={() => navigate(-1)}>
        <BsFillArrowLeftCircleFill className="me-2" /> Back to Previous
      </Button>
      <div className="feature-title">Characters</div>
      <p>
        In addition to focusing on Ricky and Morty, there are many other
        characters who support the storyline.
      </p>
      <div className="container mt-4 mb-5">
        <Row xs={1} md={3} xl={4} className="g-4">
          {data.characters.results.map(
            ({ id, name, status, image, species }) => (
              <Link
                to="/character/details"
                style={{ textDecoration: "none", color: "black" }}
                state={{ idCharacter: id }}
              >
                <Col>
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
            )
          )}
        </Row>
      </div>
    </div>
  );
};

export default CharList;
