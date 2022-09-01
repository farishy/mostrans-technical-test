import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="container">
        <div className="welcome-overlay">
          <div className="p-5">
            <div className="title">Rick and Morty World</div>
            <p className="text-light">Closer to all the characters</p>
            <Link to="/characters">
              <Button variant="primary">Discover Now</Button>{" "}
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
