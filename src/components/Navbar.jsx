import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/re_simple.png';
import '../styles/navbar.css';

function NavbarComponent() {
  const location = useLocation();

  return (
    <Navbar expand="lg" className="site-navbar bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="ReSimple Logo" width="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {location.pathname === '/dataTable' ? (
              <Nav.Link as={Link} to="/"><h2 className="header__title">Inicio</h2></Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/dataTable"><h2 className="header__title">Portal de Colaboradores</h2></Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
