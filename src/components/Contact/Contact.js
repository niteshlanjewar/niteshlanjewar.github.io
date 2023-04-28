import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import myImg from "../../Assets/home-main.svg";
import Type from "./Type2";
import { FaLinkedinIn } from "react-icons/fa";
import {
	AiFillGithub,
	
  } from "react-icons/ai";


function Contact() {
	const [contactMe] = useState(false);
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
      <Row>
						<Col md={7} className="home-header">
							<h1 style={{ paddingBottom: 15 }} className="heading">
								FIND ME ON...
								
							</h1>

							<h5>MOBILE : 9168679133</h5>
							<h5>E-MAIL : nitlanjewar1621@gmail.com</h5>	
					     	
							 <li className="social-icons">
                <a
                  href="https://github.com/niteshlanjewar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
             
								<h5>GitHub: niteshlanjewar</h5>
								<a href="https://github.com/niteshlanjewar" target="_blank"></a>
							</li>
                            
							<li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nitesh-lanjewar-688367234/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              
								<h5>LinkedIn: NiteshLanjewar</h5>
								<a href="https://www.linkedin.com/in/nitesh-lanjewar-688367234/" target="_blank" onClick={() => contactMe(false)}></a>						
							</li>
							<div style={{ padding: 50, textAlign: "left" }}>
								<Type />
							</div>
						</Col>
           
						<Col md={5} style={{ paddingBottom: 20 }}>
							<img
								src={myImg}
								alt="home pic"
								className="img-fluid"
								style={{ maxHeight: "450px" }}
							/>
						</Col>
					</Row>
      </Container>
    </Container>
  );
}

export default Contact;
