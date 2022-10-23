import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { useAuth } from '../authentication/auth';

function OffcanvasExample() {

  var expand = 'xxl';
const auth=useAuth()

  return (
    <Navbar key={expand} bg="info" expand={expand} className="mb-3">
      <Container fluid>
        <Navbar.Brand href=""><b>ClickFoody</b></Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              ClickFoody
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="text-center flex-grow-1 pe-3 square border rounded border-secondary bg-info">
              <Nav.Link href="/admin/restaurant">Restaurants</Nav.Link>
            </Nav>
            <Nav className="text-center flex-grow-1 pe-3 square border rounded border-secondary bg-info">
              <Nav.Link onClick={auth.logout} href="/login">Logout</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default OffcanvasExample;