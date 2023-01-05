import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useState, useEffect } from "react";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Software Engineer",
    "Web Developer",
    "Artificial Intelligence",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

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
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    }
    else if (isDeleting && updateText === '') {
      setIsDeleting(false);
      setDelta(500);
      setLoopNum(loopNum + 1);
    }

  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to My Portofolio</span>
            <h1>
              {`Hi, I'm Caknoo`}
              <span className="wrap"> { text }</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates qui fugiat assumenda illum deleniti veniam beatae
              deserunt magnam, unde, voluptatum corrupti provident.
              Necessitatibus officiis suscipit magni consectetur et dolorum
              quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates qui fugiat assumenda illum deleniti veniam beatae
              deserunt magnam, unde, voluptatum corrupti provident.
              Necessitatibus officiis suscipit magni consectetur et dolorum
              quaerat!
            </p>
            <button onClick={() => console.log("connect")}>
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header img " />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
