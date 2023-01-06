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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, incidunt eius? Iure porro excepturi quam dolores
                aperiam deleniti voluptatum pariatur aspernatur, molestiae sequi
                obcaecati nisi. Fugit, distinctio. Officia perspiciatis quod
                molestiae asperiores ab ducimus voluptatem earum impedit, unde
                repellendus in sit eius blanditiis quibusdam harum doloremque.
                Quod, est inventore ab cum molestias, nam autem soluta odio hic
                pariatur officiis esse optio repellendus! Laudantium unde nemo
                quos ratione, aspernatur nam! Beatae eligendi necessitatibus
                alias maxime provident veritatis adipisci nemo culpa nulla
                reprehenderit itaque incidunt consectetur minima animi molestias
                pariatur, quam perferendis quibusdam quidem dolorem quos? Beatae
                exercitationem fugit error sint voluptate.
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
