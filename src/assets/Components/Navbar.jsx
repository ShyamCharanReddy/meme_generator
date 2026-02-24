import React from 'react';
import {Link}  from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
import { FaUserCircle } from 'react-icons/fa'
const Navigate = () => {
    return (
        <Navbar 
      expand="lg" 
      fixed="top"
      className="px-4 py-2"
      style={{
        background: 'rgba(15, 15, 15, 0.9)', 
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    > 
       
        <Navbar.Brand 
          href="/home" 
          className="font-bold text-white tracking-wide"
          style={{ color: '#ffffff' }} // Force white color
        >
          MEMER
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            
              <Nav.Link 
                href="/home" 
                className="hover:text-white transition-colors duration-200"
                style={{ color: 'rgba(255, 255, 255, 0.8)' }} 
              >
                Home
              </Nav.Link>
              
              <Nav.Link 
                href="/create-meme" 
                className="hover:text-white transition-colors duration-200"
                style={{ color: 'rgba(255, 255, 255, 0.8)' }} 
              >
                Create your own meme
              </Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link href="/" className="p-0">
                {/* Ensure the icon is bright enough to see */}
                <FaUserCircle 
                  className="user-icon hover:text-white transition-all" 
                  style={{ fontSize: '1.5rem', color: 'rgba(255, 255, 255, 0.8)' }} 
                />
              </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default Navigate;


    
 