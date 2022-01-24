import { Card } from "react-bootstrap";
const Footer = () => {
  return (
    <Card>
      <Card.Header>
        <img
          style={{ height: 50 }}
          src="/images/copyright.png"
          className="Hero-logo"
          alt="logo"
        />
        Hero Posts
      </Card.Header>
      <Card.Body style={{ display: "flex", justifyContent: "space-evenly" }}>
        <h5 className="card-title">Follow Us On:</h5>
        <img style={{ height: 50 }} src="/images/fb.png" alt="logo" />
        <img style={{ height: 50 }} src="/images/twitter.png" alt="logo" />
        <img style={{ height: 50 }} src="/images/linkedin.png" alt="logo" />
      </Card.Body>
    </Card>
  );
};

export default Footer;
