import '../Css/NavBarCss.css'
import {Navbar, Nav, Container} from "react-bootstrap"

function NavBar() {
  return (
    <Navbar collapseOnSelect style={{position: "sticky"}} expand="sm" bg="dark" variant="dark" fixed="top" id="NavBarEdited">
      <Container>
        <Navbar.Brand href="/">
          <i className="fas fa-graduation-cap mx-auto" id="graduation"></i>
          Student Notes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id="navLink" href="/">Home</Nav.Link>
            <Nav.Link id="navLink" href="/notespage">Notes</Nav.Link>
            <Nav.Link id="navLink" href="#About">About</Nav.Link>            
          </Nav>
          <Nav>
            <Nav.Link id="navLink" href="#login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
