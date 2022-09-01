import { Card, Button, Badge } from "react-bootstrap";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import logo from "../assets/images/logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const CharDetails = () => {
  const location = useLocation();
  const { idCharacter } = location.state;

  const GET_CHARACTER_BY_ID = gql`
    query getCharacterById {
      character(id: ${idCharacter}) {
        id
        name
        status
        image
        species
        location{
            id
            name
        }
        created
      }
    }
  `;

  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_CHARACTER_BY_ID);
  console.log(data);
  if (loading)
    return (
      <div className="container">
        <Card className="text-center">
          <Card.Header className="feature-title">Character Details</Card.Header>
          <Card.Body>
            <div
              alt="logo"
              width="25%"
              height="25%"
              className="d-inline-block align-top me-3 skeleton"
            />
            <Card.Title className="skeleton skeleton-text"></Card.Title>
            <Card.Text className="mt-3 skeleton skeleton-text"></Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>
      </div>
    );
  if (error) return <p>Error :</p>;

  return (
    <div className="container">
      <Button variant="link" className="my-3" onClick={() => navigate(-1)}>
        <BsFillArrowLeftCircleFill className="me-2" /> Back to Previous
      </Button>
      <Card className="text-center">
        <Card.Header className="feature-title">Character Details</Card.Header>
        <Card.Body>
          <img
            src={data.character.image}
            alt="logo"
            width="25%"
            height="25%"
            className="d-inline-block align-top me-3 mb-3"
          />
          <Card.Title>{data.character.name}</Card.Title>
          <Badge bg="primary" className="me-2">
            {data.character.species}
          </Badge>{" "}
          {data.character.status === "Alive" ? (
            <Badge bg="success" className="me-2">
              {data.character.status}
            </Badge>
          ) : (
            <Badge bg="secondary" className="me-2">
              {data.character.status}
            </Badge>
          )}
          <Badge bg="warning" text="dark" className="me-2">
            {data.character.location.name}
          </Badge>{" "}
          <Card.Text className="mt-3">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
          <Button variant="primary">Save to Location Page</Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          Created: {data.character.created}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CharDetails;
