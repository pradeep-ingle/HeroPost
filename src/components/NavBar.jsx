import { Navbar, Container, Nav } from "react-bootstrap";
// import Hero-logo from './/Hero-logo.png';
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/home">
          <img
            style={{ height: 50 }}
            src="/images/Hero-logo.png"
            className="Hero-logo"
            alt="logo"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/allPosts">Home</Link>
            <Link to="/createPost">Create a Post</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
