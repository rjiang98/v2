import React from "react"
import Layout from "../components/layout/Layout"
import { Container, Row, Col } from "react-bootstrap"
import MyJumbo from "../components/myJumbo/MyJumbo"
import ProjectCard from "../components/portProjectCard/ProjectCard"

import "./index.css"

import project1 from "../images/portfolio/pts.png"
import project2Picture from "../images/portfolio/cake.png"
import project3Picture from "../images/portfolio/game.png"

//Project 2

const project2 = {
  title: "Project 2 title",
  date: "2019-03-03",
  decription:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat enim amet voluptatum, aut quisquam a, veritatis dolores odit adipisci corrupti tenetur optio. Aliquam incidunt dolor laborum tempore officia obcaecati.",
  sourceURL: "https://github.com/",
  hostedURL: "https://www.google.com",
}

//Project 3

const project3 = {
  title: "Project 3 title",
  date: "2019-02-12",
  decription:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat enim amet voluptatum, aut quisquam a, veritatis dolores odit adipisci corrupti tenetur optio. Aliquam incidunt dolor laborum tempore officia obcaecati.",
  sourceURL: "https://github.com/",
  hostedURL: "https://www.google.com",
}

export default () => (
  <div className="App">
    <Layout>
      <MyJumbo
        title={"Projects Portfolio"}
        body={"I think the best way of learning is by building Stuff."}
      />
      <hr />

      <Container style={{ marginTop: "2.5rem" }}>
        <Row>
          <Col>
            <ProjectCard
              imageSrcPath={project2Picture}
              title={"This Personal Website!"}
              date={"July 2019"}
              description={
                "https://github.com/rjiang98/v2"
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
              imageSrcPath={project1}
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
              imageSrcPath={project2Picture}
              title={"Deal Finder | Alexa App"}
              date={"August 2018"}
              description={
                "https://github.com/rjiang98/deal-finder"
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
              imageSrcPath={project3Picture}
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
