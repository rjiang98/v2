import React from "react"

import { Row, Col } from "react-bootstrap"

import "./position.css"

const Position = props => {
  return (
    <div className="pos">
      <Row>
        <Col>
          <h5>{props.title}</h5>
        </Col>
      </Row>
      <Row>
        <Col>{props.location}</Col>
        <Col>{props.date}</Col>
      </Row>
      <Row>
        <Col>
          <p>
            {props.description}
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default Position
