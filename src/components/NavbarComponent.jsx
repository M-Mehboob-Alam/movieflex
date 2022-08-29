import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand  href="#home"> <Link className='text-decoration-none text-light' to='/' >MovieFlex</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="/"className='text-decoration-none text-light p-2 ' >Home</Link>
          <Link to="/movies-list"className='text-decoration-none text-light p-2 ' >Movies List</Link>
          <Link to="/add-movie"className='text-decoration-none text-light p-2 ' >Add Move</Link>
          <Link to="/about-us"className='text-decoration-none text-light p-2 ' >About Us</Link>
          <Link to="/contact-us"className='text-decoration-none text-light p-2 ' >Contact Us</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarComponent