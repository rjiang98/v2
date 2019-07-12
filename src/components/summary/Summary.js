import React from "react"

import { Container, Row, Col } from "react-bootstrap"

import "../../fontawesome/css/all.min.css"

import "./summary.css"

const Summary = () => (
  <Container className="content" fluid>
    <h3>Cool Recent Tech I use:</h3>
    <br />
    <Row className="text-center tech_icons">
      <Col>
        <i className="fab fa-js hover_effect" />
        <br />
        <span>JavaScript</span>
      </Col>
      <Col>
        <i className="fab fa-react hover_effect" />
        <br />
        <span>React.js</span>
      </Col>
      <Col>
        <i className="fab fa-aws hover_effect" />
        <br />
        <span>Cloud Services</span>
      </Col>
      <Col>
        <i className="fab fa-java hover_effect" />
        <br />
        <span>Java</span>
      </Col>
    </Row>
    <br />

    <h4 className="goal_text text-center">
      As a developer and aspiring educator, I live to never stop learning and never stop teaching.
      Here are a couple of things I'm good at:
    </h4>
    <Row style={{ marginTop: "1.8rem" }}>
      <Col>
        <h4 className="hover_effect">Tagline1</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem quod maiores maxime suscipit assumenda vitae, incidunt
          doloremque ab voluptate, atque explicabo ea adipisci. Et quibusdam
          odit expedita quis officia minima!
        </p>
      </Col>
      <Col>
        <h4 className="hover_effect">Tagline2</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, modi
          reiciendis. Placeat quia facilis neque, corporis ullam maiores eaque
          quos autem voluptatibus, minus totam animi quo sint ea, atque sit?
        </p>
      </Col>
    </Row>
    <br />
    <Row>
      <Col>
        <h4 className="hover_effect">Tagline3</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
          consequuntur. Ipsum deserunt veniam molestias odio rerum repudiandae
          officia quasi magnam at sint, amet commodi ad quisquam explicabo ab
          quia saepe?
        </p>
      </Col>
      <Col>
        <h4 className="hover_effect">Tagline4</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
          excepturi odio illum accusamus eum optio voluptatum corporis beatae
          impedit, molestias maxime obcaecati totam maiores eius voluptate ex
          animi minus aperiam!
        </p>
      </Col>
    </Row>
    <br />
    <h4 className="goal_text text-center">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quidem
      praesentium tenetur blanditiis repellendus facilis maiores ducimus cumque,
      nesciunt nulla non ad excepturi magni eveniet voluptatum numquam libero
      error mollitia.
    </h4>
  </Container>
)

export default Summary
