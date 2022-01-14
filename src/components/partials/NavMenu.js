import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../partials/NavMenu.css';

export default function NavMenu() {

  return (
    <>
      <Navbar className='navbar' sticky='top'>
        <Navbar.Brand href='/' className='navbar-brand'> React Template
          {' '}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />

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
      </Navbar>

    </>
  )
};
