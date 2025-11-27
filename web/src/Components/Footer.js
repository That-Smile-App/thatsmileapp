import '../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import insta from '../Images/Vector.svg';
import linkedIn from '../Images/linkedIN.png';
import fb from '../Images/fb.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-background ">
      <div className="container-box">
        <Navbar collapseOnSelect className="">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-md-auto d-none d-md-block"></Nav>
            <Nav>
              <Nav.Link href="/" className="common-Text mx-4">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/smilescience" className='common-Text mx-4'>
                Smile Science
              </Nav.Link>
              <Nav.Link href="/TermsAndConditions" className="common-Text mx-4">
                About
              </Nav.Link>
              <Nav.Link href="/PrivacyPolicy" className="common-Text mx-4">
                Privacy
              </Nav.Link>
              <Nav.Link href="/TermsAndConditions" className="common-Text mx-4">
                Terms
              </Nav.Link>
              <Nav.Link href="/ContactUs" className="common-Text mx-4">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default Footer;
