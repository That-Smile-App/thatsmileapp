import '../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Images/logos.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className='container-box'>
        <Navbar collapseOnSelect expand="lg" className="topbar-background">
          <Navbar.Brand>
            <img
              src={logo}
              alt="My Image"
              className='navbar-image'
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>

            <Nav>
              <Nav.Link as={Link} to="/" className='common-Text mx-4'>
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/smilescience" className='common-Text mx-4'>
                Smile Science
              </Nav.Link>

              <Nav.Link as={Link} to="/About" className='common-Text mx-4'>
                About
              </Nav.Link>

              <Nav.Link as={Link} to="/PrivacyPolicy" className='common-Text mx-4'>
                Privacy
              </Nav.Link>

              <Nav.Link as={Link} to="/TermsAndConditions" className='common-Text mx-4'>
                Terms
              </Nav.Link>

              <Nav.Link as={Link} to="/ContactUs" className='common-Text mx-4'>
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
