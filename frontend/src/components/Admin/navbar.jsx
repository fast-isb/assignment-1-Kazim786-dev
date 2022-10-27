import React from 'react';
import Container from 'react-bootstrap/Container';
// import NavLink from 'react-bootstrap/esm/NavLink';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from '../authentication/auth';

function OffcanvasExample() {

  const navigate = useNavigate()
  const GoBack = ()=>{
    navigate(-1)
  }

  var expand = 'xxl';
const auth=useAuth()

  return (
    <Navbar key={expand} bg="info" expand={expand} className="mb-3">
      <Container fluid>
        <Navbar.Brand href=""><b>FoodGo</b></Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              FoodGo
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="text-center flex-grow-1 pe-3 square border rounded border-secondary bg-info">
              {/* <Nav.Link href="/admin/restaurant">Restaurants</Nav.Link> */}
              <NavLink to='/admin/restaurant' style={{textDecoration:'none',color:'inherit'}}>Restaurants</NavLink>
            </Nav>
            <Nav className="text-center flex-grow-1 pe-3 square border rounded border-secondary bg-info">
              <NavLink onClick={GoBack} style={{textDecoration:'none',color:'inherit'}}>Go Back</NavLink>
            </Nav>
            <Nav className="text-center flex-grow-1 pe-3 square border rounded border-secondary bg-info">
              {/* <Nav.Link onClick={auth.logout} href="/login">Logout</Nav.Link> */}
              <NavLink onClick={auth.logout} to='/login' style={{textDecoration:'none',color:'inherit'}}>Logout</NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default OffcanvasExample;