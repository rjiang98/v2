import React from "react"
import { Jumbotron } from "react-bootstrap"

//import custom styles
import "./hero.css"
import SocialRow from "../SocialRow/SocialRow"

const Hero = () => (
  <Jumbotron style={jumbo_styles} className="jumbo" fluid>
    <div className="jumbo_content">
      <h1>Hey, I'm a software developer from Portland, studying in Seattle.</h1>
      <br />
      <h3>
        Right now I'm using Javascript, React.js and C# to
        build better user experiences at Microsoft.
      </h3>
      <p>Have anything you'd like to discuss?</p>
      <p>
        Let's chat! You can find me by clicking anywhere below.
      </p>
      <SocialRow color="#000"/>
    </div>
  </Jumbotron>
)

const jumbo_styles = {
  backgroundColor: "MintCream",
  paddingLeft: "1rem",
}

export default Hero
