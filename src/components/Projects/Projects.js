import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard 
              imgPath="https://grnhse-marketing-site-assets.s3.amazonaws.com/production/Greenhouse_SEO.jpg"
              isBlog={false}
              title="Greenhouse Software-Clone"
              description="A collaborative project, built in 5 days by a team of 4 developers. It is created using JavaScript | HTML | CSS"
              
              link="https://github.com/Ni3deshwal/GreenHouseClone"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://www.amazonswatchmagazine.com/wp-content/uploads/2021/11/Nykaa-.jpg"
              isBlog={false}
              title="Nykaa-Clone"
              description="A collaborative project, built in 7 days by a team of 5 developers. It is created using JavaScript | HTML | CSS | JSON"
              link="https://github.com/almightycoder4/nykaa-clone"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://qph.cf2.quoracdn.net/main-qimg-d049946241e53481209a8938b70321e0"
              isBlog={false}
              title="Quora-Clone (React)"
              description="A collaborative project, built in 7 days by a team of 4 developers. It is created using JavaScript | HTML | CSS | JSON | React | MongoDB | NodeJS"
              link="https://github.com/dev-mayank09/Quora"
            />
          </Col>
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
