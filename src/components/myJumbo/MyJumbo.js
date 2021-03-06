import React from "react"

import { Jumbotron } from "react-bootstrap"

import "./myJumbo.css"

/*########### PROPS ##########
title: The title of the jumbotron
body: The body of the Jumbotron
body2:
*/

const MyJumbo = props => (
  <Jumbotron fluid className="myjumbo" style={myjumbo_styles}>
    <div className="myjumbo_content">
      <h1>{props.title}</h1>
      <span>
        <p>{props.body}</p>
      </span>
      <span>
        <p>{props.body2}</p>
      </span>
    </div>
  </Jumbotron>
)

const myjumbo_styles = {
  backgroundColor: "MintCream",
}

export default MyJumbo
