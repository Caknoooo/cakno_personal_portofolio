import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import hero from "../assets/img/hero1.png";
import hero2 from "../assets/img/hero2.png";
import hero3 from "../assets/img/hero3.png";
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";
import { useState, useEffect } from "react";
import 'animate.css';
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "M Naufal Badruttamam",
    "Software Engineering",
    "Web Developer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  const [index, setIndex] = useState(1);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setDelta(500);
      setIndex(1);
      setLoopNum(loopNum + 1);
    }
    else {
      setIndex(prevIndex => prevIndex + 1)
    }
  };

  return (
    <Router>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <span className="tagline">Welcome To My Portfolio 👋</span>
                    <h1>
                      {`Hello, I'm`}{" "}
                      <span className="wrap"> {text} </span>
                    </h1>
                    <p>
                      Hello, my Name is M Naufal Badruttamam, I'm from Surabaya,
                      Indonesia. I studied programming in early September 2021,
                      I am a junior in programming, specifically in the field of
                      Software Engineering and Backend Developer. I also have an
                      interest in the realm of Artificial Intelligence
                      <br /> <br />
                      “Stay away from those people who try to disparage your
                      ambitions. Small minds will always do that, but great
                      minds will give you a feeling that you can become great
                      too.” — Mark Twain
                    </p>
                    <HashLink to="#connect" style={{ textDecoration: "none" }}>
                      <button onClick={() => console.log("connect")}>
                        Let's Connect <ArrowRightCircle size={25} />
                      </button>
                    </HashLink>
                  </div>
                )}
              </TrackVisibility>
            </Col>

            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  >
                    <img src={hero} alt="Header Img" />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </Router>
  );
};
