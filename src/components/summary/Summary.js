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

    <h4 className="text-center">
      As a developer and aspiring educator, my motto is
    </h4>
    <br />
    <h3 className="text-center" style={{color:"darkcyan"}}>
      "Never stop learning and never stop teaching"
    </h3>
    <br />
    <h5 className="text-center">
      I aim to bring a collborative and open-mindedness culture everywhere I go. My goal is to positively
      impact others through my work, whether that be through a software solution that improves a customer's
      experience or by educating others and helping them find their passions.
    </h5>
  </Container>
)

export default Summary


// <Row style={{ marginTop: "1.8rem" }}>
//   <Col>
//     <h4 className="hover_effect">Tagline1</h4>
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//       Exercitationem quod maiores maxime suscipit assumenda vitae, incidunt
//       doloremque ab voluptate, atque explicabo ea adipisci. Et quibusdam
//       odit expedita quis officia minima!
//     </p>
//   </Col>
//   <Col>
//     <h4 className="hover_effect">Tagline2</h4>
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, modi
//       reiciendis. Placeat quia facilis neque, corporis ullam maiores eaque
//       quos autem voluptatibus, minus totam animi quo sint ea, atque sit?
//     </p>
//   </Col>
// </Row>
// <br />
// <Row>
//   <Col>
//     <h4 className="hover_effect">Tagline3</h4>
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
//       consequuntur. Ipsum deserunt veniam molestias odio rerum repudiandae
//       officia quasi magnam at sint, amet commodi ad quisquam explicabo ab
//       quia saepe?
//     </p>
//   </Col>
//   <Col>
//     <h4 className="hover_effect">Tagline4</h4>
//     <p>
//       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
//       excepturi odio illum accusamus eum optio voluptatum corporis beatae
//       impedit, molestias maxime obcaecati totam maiores eius voluptate ex
//       animi minus aperiam!
//     </p>
//   </Col>
// </Row>
// <br />
// <h4 className="goal_text text-center">
//   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quidem
//   praesentium tenetur blanditiis repellendus facilis maiores ducimus cumque,
//   nesciunt nulla non ad excepturi magni eveniet voluptatum numquam libero
//   error mollitia.
// </h4>
