import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import coffee_1 from "../assets/img/coffee_land_1.png";
import coffee_2 from "../assets/img/coffee_land.png";
import lego_1 from "../assets/img/lego_1.png";
import lego_2 from "../assets/img/lego_2.png";
import lego_3 from "../assets/img/lego_3.png";
// import bitcoin_1 from "../assets/img/bitcoin_1.png"
import bitcoin_2 from "../assets/img/bitcoin_2.png"
// import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useContext } from "react";
import { AppContext } from "../App";

export const Projects = () => {

  const projects = [
    {
      title: "CoffeeLessonz Website",
      description: "A landing website for a promising EdTech startup.",
      imgUrl: coffee_1,
    },
    {
      title: "CoffeeLessonz Website",
      description: "A landing website for a promising EdTech startup.",
      imgUrl: coffee_2,
    },
    {
      title: "Lego Website",
      description: "A Lego themed website built for fun.",
      imgUrl: lego_1,
    },
    {
      title: "Lego Website",
      description: "A Lego themed website built for fun.",
      imgUrl: lego_2,
    },
    {
      title: "Lego Website",
      description: "A Lego themed website built for fun.",
      imgUrl: lego_3,
    },
    {
      title: "Bitcoin.et",
      description: "A website for a cryptocurrency exchange.",
      imgUrl: bitcoin_2,
    }
  ];

  const theme = useContext(AppContext).theme;

  return (
    <section className={`project project-${theme}`} id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <h2>Projects</h2>
                <p>These are some projects that I've worked on...</p>
                <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}
