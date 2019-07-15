import React from "react"
import { Jumbotron } from "react-bootstrap"

import "./hero.css"
import SocialRow from "../SocialRow/SocialRow"

const Hero = () => (
  <Jumbotron style={jumbo_styles} className="jumbo" fluid>
    <div className="jumbo_content">
      <p>
        Hey! My name is
      </p>
      <h1>Richard Jiang</h1>
      <br />
      <h3>I am a software developer from Portland, studying in Seattle.</h3>
      <h3>
        Right now I'm using Javascript, React.js and C# to
        build better user experiences at Microsoft.
      </h3>
      <br />
      <p>Have anything you'd like to discuss?</p>
      <br />
      <p>
        Let's chat! You can find me by clicking anywhere below.
      </p>
      <br />
      <SocialRow color="#000"/>
    </div>
  </Jumbotron>
)

const jumbo_styles = {
  backgroundColor: "MintCream",
  paddingLeft: "1rem",
  paddingBottom: "0rem",
}

export default Hero
