import React from 'react';
import {Link}  from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
import { FaUserCircle } from 'react-icons/fa'
const Navigate = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top"> 
        <Navbar.Brand href="/home">Memer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/create-meme">Create your own meme</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/" className=''><FaUserCircle className="user-icon" /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
}

export default Navigate;


    
 