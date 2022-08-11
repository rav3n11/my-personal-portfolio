import react_light from "../assets/img/react-light.svg";
import react_dark from "../assets/img/react-dark.svg";
import node_light from "../assets/img/node-light.svg";
import node_dark from "../assets/img/node-dark.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useContext } from "react";
import { AppContext } from "../App";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const theme = useContext(AppContext).theme;

  return (
    <section id="skills" className={`skill-${theme}`}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className={`skill-bx ${theme} skill-bx-${theme} wow zoomIn`}>
                        <h2>Skills</h2>
                        <p>The skills I'm confident at<br></br> Ready to learn others...</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={theme === 'light' ? react_light : react_dark} alt="react" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={theme === 'light' ? node_light : node_dark} alt="node" />
                                <h5>NodeJs</h5>
                            </div>
                            <div className="item">
                                <img src={theme === 'light' ? react_light : react_dark} alt="flutter" />
                                <h5>Flutter</h5>
                            </div>
                            <div className="item">
                                <img src={theme === 'light' ? react_light : react_dark} alt="angular" />
                                <h5>Angular</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  )
}
