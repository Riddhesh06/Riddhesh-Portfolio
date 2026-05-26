import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Riddhesh Khedekar</span>{" "}
            from <span className="purple">Mumbai, India</span>.
            <br />
            <br />
            I am a passionate and dedicated software developer with a strong
            background in computer science. I have a deep love for coding and
            problem-solving, and I am always eager to learn new technologies and
            improve my skills. Currently, I live in{" "}
            <span className="purple">London ,United Kingdom</span>
            <br />
            <br />
            I have graduated at{" "}
            <span className="purple">University of Greenwich</span> with a degree in{" "}
            <span className="purple">MSc Data Science</span>.
            
            <br />
            <br />
            Besides coding, I love engaging in activities that keep me
            creative and inspired such as playing games, and exploring new places.:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            {/*<li className="about-activity">
              <ImPointRight /> 
            </li>*/}
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
