import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import task_management from "../../Assets/Projects/task_management.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task_management}
              isBlog={false}
              title="Task management Web App"
              description="Task-management-Web-App is a web application designed to help 
                            users organize and manage daily tasks efficiently. It allows 
                            users to create, update, track, and manage tasks through an 
                            easy-to-use interface, improving productivity and keeping 
                            work organized. Typical functionality includes task creation, 
                            status management (pending/completed), and overall task 
                            tracking."
              ghLink="https://github.com/Riddhesh06/Task-management-Web-App"
              demoLink="https://task-management-seven-psi.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
