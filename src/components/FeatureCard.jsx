import { Col } from "react-bootstrap";

export const FeatureCard = ({title, imageUrl, body, url}) => {
  
  
  return (
    <Col sm={6} md={4} className="align-items-center centered">
      <div className="card-container">
        <div className="image-container">
          <img src={imageUrl} alt="" />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>{title}</h3>
          </div>
          <div className="card-body">
            <p>{body}</p>
          </div>
        </div>
        <div className="btnmore">
          <button>
            <a href={url} className="a-card">
              Try it
            </a>
          </button>
        </div>
      </div>
    </Col>
  );
}