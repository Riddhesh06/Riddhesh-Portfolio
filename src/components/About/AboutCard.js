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
            I have graduated at{" "}
            <span className="purple">University of Greenwich</span> with a degree in{" "}
            <span className="purple">MSc Computer Science</span>.
            
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
