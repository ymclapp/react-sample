import React from 'react';
import { Nav, Navbar, NavItem, Container, Offcanvas, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../partials/NavMenu.css';

export default function NavMenu() {

  return (
    <>
      <Navbar className='navbar' sticky='top' expand={false}>
        <Container fluid>
          <Navbar.Brand href='/' className='navbar-brand'> React Template[logo here]
            {' '}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='offcanvasNavbar' />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >

            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>

              <Nav className='me-auto'>

                <NavItem className='tab1'>
                  <Nav.Link as={Link} to='/home' className='navbar-link'>Home</Nav.Link>
                </NavItem>
              </Nav>

              <Nav className='me-auto'>
                <NavItem className='tab1'>
                  <Nav.Link as={Link} to='/home' className='navbar-link'>[Login]</Nav.Link>
                </NavItem>
              </Nav>

            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

    </>
  )
};
