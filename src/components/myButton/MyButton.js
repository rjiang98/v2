import React from "react"

import { Col } from "react-bootstrap"

import "./myButton.css"

//########## PROPS INPUT ###############
//text: the text displayed in the button
//URL: the link the button goes to

const MyButton = props => {
  if (props.on === true)
  return (
    <Col sm={props.size}>
      <a href={props.URL} target={props.target} rel="noopener noreferrer">
        <div className="button_styles text-center">{props.text}</div>
      </a>
    </Col>
  )
  return null
}

export default MyButton
