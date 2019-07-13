import React from "react"
import Layout from "../components/layout/Layout"
import MyJumbo from "../components/myJumbo/MyJumbo"
import MyButton from "../components/myButton/MyButton"
import Position from "../components/position/Position"

import "../fontawesome/css/all.min.css"
import "./index.css"

import { Container, Row, Col } from "react-bootstrap"

import CV from "../../static/Richard_Jiang_Resume.pdf" //Import you CV file here!

export default () => (
  <div className="App">
    <Layout>
      <MyJumbo
        body={
          "If you're looking for an endlessly curious developer with proven group communication skills, that's me!"
        }
        body2={"Bad puns and jokes come as a package deal, free of charge."}
        title={"tldr; About me."}
      />
      <Container fluid>
        <Row style={{ marginTop: "2rem", marginBottom: "1.5rem" }}>
          <MyButton text={"Resume"} URL={CV} size={"12"} on={true} target={"_blank"}/>
        </Row>
        <hr />
        <Row>
          <Col>
            <h3>Work Experience</h3>
          </Col>
        </Row>
        <hr />
        <Position
          title="Software Engineer Intern"
          location="Microsoft, Redmond, WA"
          date="06/2019 - 09/2019"
          description="Part of the Office Licensing team, working to give users the best experience acquiring Office. I am using TypeScript, React.js, and C# to build a PWA to help user configure their Office experience on startup. This could be activating an exisitng subscription, setting up a trial, or notifying users that their school or company provides a free license."
        />
        <hr />
        <Position
          title="Software Development Engineer Intern"
          location="Amazon Web Services, Seattle, WA"
          date="06/2018 - 09/2018"
          description="Worked on data center montioring, creating solutions that ensure the reliability of servers. I designed and implemented a self service control plane for an existing service that monitored data center health, allowing users to add their own metrics to track. The service was constructed with Java and various AWS services like Lambda, S3, APIGateway, and Cloud Formation."
        />
        <hr />
        <Row>
          <Col>
            <h3>Teaching Experience</h3>
          </Col>
        </Row>
        <hr />
        <Position
          title="Undergraduate Teaching Assistant"
          location="University of Washington, Seattle, WA"
          date="09/2018 - Present"
          description="2 time TA for Data Structures & Parallelism, 1 time TA for Hardware Software Interface at the University of Washington. My responsibilities include leading a weekly section and office hours, organizing exam review session, creating exercises and exam problems, and running course infrastructure. As a TA I have worked with groups of students of varying sizes and skill levels."
        />
        <hr />
        <Row>
          <Col>
            <h3>Education</h3>
          </Col>
        </Row>
        <hr />
        <Position
          title="Bachelors & Masters of Science, Computer Science"
          location="University of Washington, Seattle, WA"
          date="9/2016 - 06/2021"
          description="3.90 GPA, student in the Paul G. Allen School of Computer Science & Engineering, combined BS/MS program"
        />
      </Container>
    </Layout>
  </div>
)
