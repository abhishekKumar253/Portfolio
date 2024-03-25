import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          {" "}
          <p className="text-justify">
            Hi everyone, I'm <span className="purple">Abhishek Kumar</span> from
            <span className="purple"> Bangalore, India</span>
            <br />I am currently pursuing BSc IT, 2nd year at Nilamber Pitamber
            University.
            <br />
            Recently, I completed a project using the MERN stack, and I am
            passionate about software development.
            <br />
            <br />
            Apart from coding, here are some other activities that I love:{" "}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing tech blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Abhishek</footer>{" "}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
