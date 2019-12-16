import React from "react"
import { Container } from "react-bootstrap"
import "./projects.css"

import ProjectCard from "../portProjectCard/ProjectCard"
import MyButton from "../myButton/MyButton"

import image from "../../images/portfolio/dl.jpg"

const Projects = () => (
  <React.Fragment>
    <Container fluid>
      <h3 style={{ marginBottom: "1rem" }}> Featured Project</h3>
      <ProjectCard
        imageSrcPath={image}
        title={"Neural Style Transfer"}
        date={"December 2019"}
        description={
          "Using Pytorch, my friends and I explored neural style transfer, the idea of using a pre-trained deep neural network to transfer the style of one image onto another. I designed a new loss function and wrote code to combine more than 1 styles onto a content image."
        }
        button={"Check it out!"}
        on={true}
        URL={"https://github.com/rjiang98/DL-Project"}
        target={"_blank"}
      />
      <MyButton on={true} size={"12"} URL={"/projects"} text="Go to Projects Page -->"/>
    </Container>
  </React.Fragment>
)

export default Projects
