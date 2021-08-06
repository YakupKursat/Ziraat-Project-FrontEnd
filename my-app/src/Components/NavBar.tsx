import '../Css/NavBarCss.css'
import {Navbar, Nav, Container} from "react-bootstrap"
import {useState} from "react"

function NavBar() {
  const[sayi,setSayi] = useState(1);

  function clicked(){
    setSayi(1);
  }
  console.log("sayı",sayi);

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
            <Nav.Link onClick={clicked}  id= {sayi === 1 ? "navLinkActive": "navLinkDisable"} href="/">Home</Nav.Link>
            <Nav.Link onClick={clicked}  id= {sayi === 1 ? "navLinkActive": "navLinkDisable"} href="/notespage">Notes</Nav.Link>
            <Nav.Link onClick={clicked}  id= {sayi === 1 ? "navLinkActive": "navLinkDisable"} href="#About">About</Nav.Link>            
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
