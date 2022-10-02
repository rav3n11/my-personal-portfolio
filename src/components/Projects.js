import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import coffee_1 from "../assets/img/coffee_land_1.png";
// import coffee_2 from "../assets/img/coffee_land.png";
import lego_1 from "../assets/img/lego_1.png";
// import lego_2 from "../assets/img/lego_2.png";
// import lego_3 from "../assets/img/lego_3.png";
// import bitcoin_1 from "../assets/img/bitcoin_1.png"
// import bitcoin_2 from "../assets/img/bitcoin_2.png"
// import colorSharp2 from "../assets/img/color-sharp2.png";
import typography from "../assets/img/typography_1.png";
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
      uri: 'https://coffeelessonz.com'
    },
    // {
    //   title: "CoffeeLessonz Website",
    //   description: "A landing website for a promising EdTech startup.",
    //   imgUrl: coffee_2,
    // },
    {
      title: "Lego Website",
      description: "An open source, lego themed, website built for fun.",
      imgUrl: lego_1,
      uri: "https://github.com/rav3n11/lego-website"
    },
    // {
    //   title: "Lego Website",
    //   description: "A Lego themed website built for fun.",
    //   imgUrl: lego_2,
    // },
    // {
    //   title: "Lego Website",
    //   description: "A Lego themed website built for fun.",
    //   imgUrl: lego_3,
    // },
    {
      title: "Typography Website",
      description: "An open source website to showcase the power of typography.",
      imgUrl: typography,
      uri: "https://github.com/rav3n11/typography"
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
