// src/components/SiteNav.tsx
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap' // npm i react-router-bootstrap
export default function SiteNav(){
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <LinkContainer to="/"><Navbar.Brand>Rupesh Kumar Tipu</Navbar.Brand></LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>
            <LinkContainer to="/publications"><Nav.Link>Publications</Nav.Link></LinkContainer>
            <LinkContainer to="/patents"><Nav.Link>Patents</Nav.Link></LinkContainer>
            <LinkContainer to="/teaching"><Nav.Link>Teaching</Nav.Link></LinkContainer>
            <LinkContainer to="/workshops"><Nav.Link>Workshops</Nav.Link></LinkContainer>
            <LinkContainer to="/contact"><Nav.Link>Contact</Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
