import React from "react"
import { Row, Col } from "react-bootstrap"

import "./socialRow.css"

export default props => (
  <Row className="jumbo_social text-center">
    <Col>
      <a
        style={{ color: props.color }}
        href="https://www.github.com/rjiang98/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github hover_effect" />
      </a>
    </Col>

    <Col>
      <a
        style={{ color: props.color }}
        href="https://www.linkedin.com/in/richard-jiang98/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin hover_effect" />
      </a>
    </Col>

    <Col>
      <a
        style={{ color: props.color }}
        href="mailto:rjiang98@cs.washington.edu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-envelope hover_effect" />
      </a>
    </Col>
  </Row>
)
