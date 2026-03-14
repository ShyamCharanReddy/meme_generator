import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FaSignOutAlt } from 'react-icons/fa';

const Navigate = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

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
              style={{ color: '#ffffff' }}
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

                  <Nav.Link 
                    href="/history" 
                    className="hover:text-white transition-colors duration-200"
                    style={{ color: 'rgba(255, 255, 255, 0.8)' }} 
                  >
                    My History
                  </Nav.Link>
                </Nav>

                <Nav>
                  <Button 
                    variant="link" 
                    onClick={handleLogout} 
                    className="p-0 d-flex align-items-center hover:text-white transition-all"
                    style={{ textDecoration: 'none', color: 'rgba(255, 255, 255, 0.8)' }}
                  >
                    <FaSignOutAlt style={{ fontSize: '1.2rem', marginRight: '5px' }} />
                    <span>Logout</span>
                  </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigate;