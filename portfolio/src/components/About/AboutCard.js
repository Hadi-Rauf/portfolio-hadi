import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohammad Hadi </span>
            from <span className="purple"> Hadi, Pakistan.</span>
            <br />I am doing my O levels Privately-
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li> */}
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "𝓟𝓻𝓸𝓰𝓻𝓮𝓼𝓼 𝓲𝓼 𝓹𝓻𝓸𝓰𝓻𝓮𝓼𝓼 𝓷𝓸 𝓶𝓪𝓽𝓽𝓮𝓻 𝓱𝓸𝔀 𝓼𝓶𝓪𝓵𝓵"{" "}
          </p>
          <footer className="blockquote-footer">Hadi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
