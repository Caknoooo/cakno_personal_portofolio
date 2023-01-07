import { Container, Row, Col } from "react-bootstrap"
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailchimpForm />
          <Col sm={6} size={12}>
            <img src={logo} alt="Logo" />
          </Col>

          <Col sm={6} size={12} className="text-center text-sm-card">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/m-naufal-badruttamam-526635217/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://web.facebook.com/cakno.comel/">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/caknoo_00/">
                <img src={navIcon3} alt="" />
              </a>
              <a href="https://github.com/Caknoooo">
                <img src={navIcon4} alt="" />
              </a>

              <p>Copyright © 2023 Cakno Blog All Right Reserved.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}