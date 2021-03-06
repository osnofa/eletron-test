import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { rootPath, routes } from '../routing';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Navbar
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {routes.map((route, index) => (
            <Nav.Link key={index} as={Link} to={route.path}>
              {route.name}
            </Nav.Link>
          ))}
        </Nav>
        <Navbar.Text>
          Signed in as: <a href="#login">Mark Otto</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
