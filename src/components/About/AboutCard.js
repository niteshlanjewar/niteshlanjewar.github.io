import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nitesh </span>
            from <span className="purple"> Nagpur, India.</span>
            <br />I have completed Bachelor of Engineering from Priyadarshini College of Enginnering, Nagpur
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p className="purple">"Enjoy the life like you love...!" </p>
          <footer className="blockquote-footer">Nitesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
