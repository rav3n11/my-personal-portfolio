import { useState, useEffect, useContext, useMemo} from "react";
import { Container, Row, Col } from "react-bootstrap";
import batman from "../assets/icons/batman.svg";
import superman from "../assets/icons/lego-superman.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { AppContext } from "../App";
import JSX_withParallax from "./util/ParallaxJSXWrapper";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const [anchor] = useState(0);
  const toRotate = [ "MERN...", "PERN...", "PHART..."];
  const period = 2000;
  
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      console.log({index})
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  //This is not that importatnt

  const theme = useContext(AppContext).theme;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const Batman = useMemo(() => JSX_withParallax(
    <div className=" batman">
      <img src={batman} className="floating-image" alt="Lego batman" />
    </div>,
    0.05
  ), [anchor]);

  const Superman = useMemo(() => JSX_withParallax(
    <div className="superman">
      <img src={superman} className="floating-image" alt="Lego superman" />
    </div>,
    0.05
  ), [anchor]);
  return (
    <section className={`banner banner-${theme}`} id="home">
      <div className="spacer"></div>
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <span className={`tagline ${theme}`}><span className="txt-rotate" data-period="1000" data-rotate='[  "MERN...", "PERN...", "PHART..."]'><span className="wrap">{text}</span></span></span>
                <h1>{`Hi! I'm Bereket...`} </h1>
                  <p>A web developer from Ethiopia. I build beautiful responsive web apps, in any stack you can imagine.</p>
                  <button className={theme} onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
                  {
                    //  <img src={batman} className="floating-image" alt="Lego batman" />
                    theme === 'dark' ? <Batman /> : <Superman />
                  }
          </Col>
        </Row>
      </Container>
    </section>
  )
}
