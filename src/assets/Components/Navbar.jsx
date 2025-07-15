import React from 'react';
import {Link}  from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'

const Navigate = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg" fixed="top"> 
        <Navbar.Brand href="#home">My Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#meme">Create your own meme</Nav.Link>
          
        </Nav>
        <Nav>
            <Nav.Link href="#login" style={{marginRight:"30px"}}>Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
}

export default Navigate;


    
 