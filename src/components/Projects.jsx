import { Container, Row, Col } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { Tab } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const projects = [
    {
      title: "Advancing Bouncing Ball",
      description: "Game & Algorithm",
      imgUrl: projImg4,
    },
    {
      title: "Super Jumper",
      description: "Game & Algorithm",
      imgUrl: projImg5,
    },
    {
      title: "ChatGpt Open AI",
      description: "API",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              dolorum maxime ipsum, perspiciatis recusandae voluptatibus dolor
              consequuntur accusantium deserunt expedita explicabo officiis
              quisquam corrupti quas rem? Ipsum natus vitae facilis?
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first" href="/home">
                    Tab One
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">lorem</Tab.Pane>
                <Tab.Pane eventKey="third">lorem</Tab.Pane>

              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>

      <img src={colorSharp} alt="" className="background-image-right" />
    </section>
  );
};
