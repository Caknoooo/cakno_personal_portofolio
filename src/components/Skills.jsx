import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p className="text-center">
                I have interest in Software Engineering, Artificial Intelligence
                and Web Developer. Currently, I'm studying Backend
                Developer and Machine Learning. I'm also learning programming
                languages such as C/C++, Java, Python, Javascript, CSS, and PHP.
                I'm also studying frameworks like Laravel, Bootstrap 5, Tailwind
                CSS and also a framework for React JS, namely Next Js which I
                will learn. For Libraries, I'm currently studying React JS, Vue
                JS, Node JS for the Web Developer realm. For Artificial
                intelligence I'm studying Python Libraries like Pandas,
                Matplotlib, OpenCV, Seaborn, Scikitpy, etc.
              </p>
              <Carousel
                responsive={responsive}
                infinite="true"
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter2} alt="image1" />
                  <p>Software Engineering</p>
                </div>
                <div className="item">
                  <img src={meter1} alt="image2" />
                  <p>Web Developer</p>
                </div>
                <div className="item">
                  <img src={meter3} alt="image3" />
                  <p>Artificial Intelligence</p>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>

      <img src={colorSharp} alt="" className="background-image-left" />
    </section>
  );
};
