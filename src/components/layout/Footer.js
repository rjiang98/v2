import React from "react"

import { Container, Jumbotron, Row, Col } from "react-bootstrap"
import SocialRow from "../SocialRow/SocialRow"

import "./footer.css"
import "../../fontawesome/css/all.min.css"

const Footer = () => (
  <Jumbotron fluid style={footer_styles}>
    <Container style={{ maxWidth: "960px" }}>
      <SocialRow color={footer_styles.color} />

      <Row className="text-center" style={{ marginTop: "3rem" }}>
        <Col>
          Richard Jiang © {new Date().getFullYear()}, Built with
          <a href="https://www.gatsbyjs.org">
            <i
              className="fas fa-heart"
              style={{
                marginLeft: "10px",
                marginRight: "3px",
                fontSize: "1rem",
                color: "darkcyan",
              }}
            />
            {" "}
            <span>& Gatsby</span>
          </a>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
)

const footer_styles = {
  marginTop: "3rem",
  marginBottom: "0",
  backgroundColor: "#000",
  color: "#fff",
  paddingBottom: "0",
  width: "100%",
}

export default Footer
