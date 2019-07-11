import React from "react"
import { Container } from "react-bootstrap"
import "./projects.css"

import ProjectCard from "../portProjectCard/ProjectCard"
import MyButton from "../myButton/MyButton"

import image from "../../images/portfolio/pts.png"

const Projects = () => (
  <React.Fragment>
    <Container fluid>
      <h3 style={{ marginBottom: "1rem" }}> Latest Projects</h3>
      {/*/Props:
      //imageSrcPath: the path to the image used
      //title: The title of the card/App
      //date: The date of the card
      //description: Short description of the card
      //sourceURL: URL to the source code of the project
      //hostedURL: URL to the hosted version of the app*/}
      <ProjectCard
        imageSrcPath={image}
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
      <MyButton on={true} size={"12"} URL={"/projects"} text="Go to Projects Page -->"/>
    </Container>
  </React.Fragment>
)

export default Projects
