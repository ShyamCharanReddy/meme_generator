import React, { useEffect, useState } from 'react';
import { getUserMemes, deleteMeme } from '../api/memes.js';
import Navbar from '../assets/Components/Navbar';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';

const History = () => {
    const [memes, setMemes] = useState([]);

    const fetchMemes = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const data = await getUserMemes(token);
                if (Array.isArray(data)) {
                    setMemes(data);
                }
            } catch (error) {
                console.error("Failed to fetch history:", error);
            }
        }
    };

    useEffect(() => {
        fetchMemes();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this meme?")) {
            const token = localStorage.getItem('token');
            try {
                await deleteMeme(id, token);
                // Remove from state so UI updates immediately
                setMemes(memes.filter(meme => meme._id !== id));
            } catch (error) {
                alert(`Failed to delete meme. \n ${ error }`);
            }
        }
    };

    return (
        <div style={{ 
            minHeight: '100vh', 
            backgroundColor: '#0f0f0f', 
            color: 'white',
            paddingTop: '100px',
            paddingBottom: '50px'
        }}>
            <Navbar />
            <Container>
                <div className="d-flex justify-content-between align-items-center mb-5 border-bottom pb-3 border-secondary">
                    <h2 style={{ fontWeight: '800', letterSpacing: '2px', color: '#fff' }}>MY GALLERY</h2>
                    <span className="badge rounded-pill bg-danger" style={{ fontSize: '1rem' }}>{memes.length} Saved</span>
                </div>

                <Row>
                    {memes.length > 0 ? (
                        memes.map((meme) => (
                            <Col key={meme._id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                                <Card style={{ 
                                    backgroundColor: '#1a1a1a', 
                                    border: '1px solid #333',
                                    borderRadius: '15px',
                                    transition: 'all 0.3s ease'
                                }} className="h-100 shadow-lg">
                                    
                                    <div style={{ position: 'relative' }}>
                                        <Card.Img 
                                            variant="top" 
                                            src={meme.url} 
                                            style={{ objectFit: 'contain', height: '220px', padding: '15px' }} 
                                        />
                                        <Button 
                                            variant="danger" 
                                            size="sm"
                                            onClick={() => handleDelete(meme._id)}
                                            style={{ 
                                                position: 'absolute', 
                                                top: '10px', 
                                                right: '10px',
                                                borderRadius: '50%',
                                                width: '35px',
                                                height: '35px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                opacity: '0.8'
                                            }}
                                        >
                                            <FaTrashAlt />
                                        </Button>
                                    </div>

                                    <Card.Body style={{ backgroundColor: '#222', borderRadius: '0 0 15px 15px' }}>
                                        <div className="text-center">
                                            <small style={{ 
                                                color: '#bbb', // Light gray for visibility
                                                display: 'block',
                                                marginBottom: '5px',
                                                fontWeight: '500'
                                            }}>
                                                SAVED ON:
                                            </small>
                                            <p style={{ 
                                                color: '#00d4ff', // Cyan color to pop against dark bg
                                                fontSize: '0.9rem',
                                                margin: 0,
                                                fontWeight: 'bold'
                                            }}>
                                                {new Date(meme.createdAt).toLocaleDateString(undefined, {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric'
                                                })}
                                            </p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    ) : (
                        <Col className="text-center mt-5">
                            <h4 style={{ color: '#555' }}>No memes in your history yet.</h4>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default History;