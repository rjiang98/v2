import React from "react"
import Layout from "../components/layout/Layout"
import MyJumbo from "../components/myJumbo/MyJumbo"
import MyButton from "../components/myButton/MyButton"

import "../fontawesome/css/all.min.css"
import "./index.css"

import { Container, Row, Col } from "react-bootstrap"

import CV from "../../static/Richard_Jiang_Resume.pdf" //Import you CV file here!

export default () => (
  <div className="App">
    <Layout>
      <MyJumbo
        body={
          "So you are looking for a professional, communicative & punctual software engineer who likes to keep productive."
        }
        body2={"I can also do this cool thing if that's... needed."}
        title={"tldr; About me."}
      />
      <hr />
      <Container fluid>
        <Row style={{ marginTop: "2rem", marginBottom: "1.5rem" }}>
          <MyButton text={"Resume"} URL={CV} size={"12"} on={true} target={"_blank"}/>
        </Row>
        <Row>
          <Col>
            <h3>Summary</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>I love Coffee. I mean, more than people normaly like coffee</h5>
            <br />
            <p>
              I'm a Software Engineer building noice Websites on the internet.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              pariatur nobis ipsa laborum quae, fuga vel a, dolor consectetur
              blanditiis explicabo dolorem quos sunt voluptatibus dicta commodi
              temporibus magnam placeat.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              consequuntur. Numquam quaerat hic eum, earum perferendis totam!
              Fugiat, explicabo placeat labore voluptatum voluptas numquam
              repudiandae delectus animi dolorem consequatur. Reiciendis?
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h3>Work Experience</h3>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h5>Software Engineer Intern</h5>
          </Col>
        </Row>
        <Row>
          <Col>Microsoft, Redmond, WA</Col>
          <Col>06/2019 - 09/2019</Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginTop: "1rem" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et iure
              nisi consequuntur provident officia odio vitae, nam neque natus
              debitis earum facere, quibusdam similique itaque sed, cumque
              aliquam voluptas quos.
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h5>Software Development Engineer Intern</h5>
          </Col>
        </Row>
        <Row>
          <Col>Amazon Web Services, Seattle, WA</Col>
          <Col>06/2018 - 09/2018</Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginTop: "1rem" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              ullam eius nihil porro itaque nobis facere. Impedit eos minima
              porro. Culpa, laboriosam! Qui quo provident aperiam et ullam odio
              ex.
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h3>Education</h3>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h5>Bachelors & Masters of Science, Computer Science</h5>
          </Col>
        </Row>
        <Row>
          <Col>University of Washington, Seattle</Col>
          <Col>09/2016 - 06/2021</Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginTop: "1rem" }}>
              <strong>GPA: 3.9</strong>
              <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Tenetur quasi fugit accusamus officia sequi optio nulla,
              cupiditate in vitae natus odit nihil commodi corrupti mollitia
              necessitatibus iure eius praesentium? Fugit!
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  </div>
)
