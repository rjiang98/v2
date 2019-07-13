import React from "react"
import Layout from "../components/layout/Layout"
import { Container, Row, Col } from "react-bootstrap"
import MyJumbo from "../components/myJumbo/MyJumbo"
import ProjectCard from "../components/portProjectCard/ProjectCard"

import "./index.css"

import pts from "../images/portfolio/pts.png"
import apk from "../images/portfolio/apk.png"
import pps from "../images/portfolio/pps.png"
import df from "../images/portfolio/df.png"

export default () => (
  <div className="App">
    <Layout>
      <MyJumbo
        title={"Projects Portfolio"}
        body={"Here is where I showcase some of my work!"}
      />
      <hr />

      <Container style={{ marginTop: "2.5rem" }}>
        <Row>
          <Col>
            <ProjectCard
              imageSrcPath={pps}
              title={"Personal Portfolio Website"}
              date={"July 2019"}
              description={
                "This site is a project of mine to learn web development on my own. I built it with React.js and Gatsby. It is deployed and hosted through Netlify. There a lot more website to come!"
              }
              button={"Check it out!"}
              on={true}
              URL={"https://github.com/rjiang98/v2"}
              target={"_blank"}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProjectCard
              imageSrcPath={pts}
              title={"Path to Success | A Data Visualization"}
              date={"December 2018"}
              description={
                "Together with some frends of mine, we tell a story of higher education in the United States through various data visualizations. We built the expierence with HTML and CSS using D3.js for the visualizations."
              }
              button={"Check it out!"}
              on={true}
              URL={"https://cse442-18f.github.io/fp-the-path-to-success/"}
              target={"_blank"}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProjectCard
              imageSrcPath={df}
              title={"Deal Finder | Alexa App"}
              date={"August 2018"}
              description={
                "A cool hackathon project built with some fellow interns. Deal Finder is an Alexa app that finds good deals when prompted with a category and/or a location. The app model is built with the Alexa Skills kit and is supported with a Node.js Lambda backend."
              }
              button={"Check it out!"}
              on={true}
              URL={"https://github.com/rjiang98/deal-finder"}
              target={"_blank"}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProjectCard
              imageSrcPath={apk}
              title={"Analysis of Police Shootings"}
              date={"October 2017"}
              description={
                "Another much earlier data visualization, this time using R for data wrangling and creating graphs and Shiny build our website. The data was sourced from 538."
              }
              button={"Check it out!"}
              on={true}
              URL={"https://gcai47.shinyapps.io/final-project-air-force-1/"}
              target={"_blank"}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  </div>
)
