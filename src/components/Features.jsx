import { Container, Row, Col } from "react-bootstrap";
import { Nav, Tab } from "react-bootstrap";
import { FeatureCard } from "./FeatureCard";
import project1 from "../assets/img/project-img1.png";
import featureImg1 from "../assets/img/feature-img1.png";
import featureImg2 from "../assets/img/feature-img2.png";
import featureImg3 from "../assets/img/feature-img3.png";


export const Features = () => {
  const features = [
    {
      title: "Simple CRUD",
      imageUrl: featureImg1,
      body: "Coming Soon",
      url: "",
    },
    {
      title: "Chat-Gpt",
      imageUrl: featureImg2,
      body: "Coming Soon",
      url: "",
    },
    {
      title: "Dino Game",
      imageUrl: featureImg3,
      body: "Coming Soon",
      url: "",
    },
  ];

  return (
    <section className="feature" id="features">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center mt-4 mb-3">Features</h1>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {features.map((project, index) => {
                      return <FeatureCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}