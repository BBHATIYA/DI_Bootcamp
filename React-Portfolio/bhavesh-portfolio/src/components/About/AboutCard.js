import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bhavesh Bhatiya </span>
            from <span className="purple"> Beersheva, Israel.</span>
            <br />
            Full Stack Developer who loves to transform ideas into reality using
            code.
            <br />
            Analytical and creative Full Stack JavaScript Developer in training,
            with a passion for solving complex problems through technology. Fast
            learner, highly adaptable and thrives in fast paced environments
            under tight deadlines. Tech skills in the areas of Back End & Front
            End Programming, and Database Management.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
