import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap';
import Navbar from '../assets/Components/Navbar';
import { FaCloudUploadAlt, FaImage } from 'react-icons/fa';

const CreateYourOwnMeme = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
    const [errorMessage, setErrorMessage] = useState(''); 
    const navigate = useNavigate();

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file);
            setImagePreviewUrl(URL.createObjectURL(file));
            setErrorMessage(''); 
        }
    };

    const handleCreateMeme = () => {
        if (selectedImage && imagePreviewUrl) {
            const defaultMemeName = `Uploaded Meme - ${new Date().toLocaleDateString()}`;
            navigate(`/edit?url=${encodeURIComponent(imagePreviewUrl)}&name=${encodeURIComponent(defaultMemeName)}`);
        } else {
            setErrorMessage('Please select an image first!');
        }
    };

    return (
        <div style={{ 
            minHeight: '100vh', 
            backgroundColor: '#0f0f0f', 
            color: 'white',
            paddingTop: '120px',
            paddingBottom: '50px'
        }}>
            <Navbar />
            <Container>
                <Row className="justify-content-center">
                    <Col md={8} lg={5}>
                        <Card style={{ 
                            backgroundColor: 'rgba(26, 26, 26, 0.8)', 
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '20px',
                            backdropFilter: 'blur(10px)'
                        }} className="shadow-lg p-3">
                            <Card.Body>
                                <div className="text-center mb-4">
                                    <FaCloudUploadAlt style={{ fontSize: '3rem', color: '#00d4ff', marginBottom: '10px' }} />
                                    <h2 style={{ fontWeight: '800', color: '#bbb', letterSpacing: '1px' }}>UPLOAD IMAGE</h2>
                                    <p style={{ color: '#bbb' }}>Start your creation with a custom background</p>
                                </div>

                                {errorMessage && (
                                    <div className="alert alert-danger bg-danger text-white border-0 text-center py-2" role="alert">
                                        {errorMessage}
                                    </div>
                                )}

                                <Form>
                                    <Form.Group controlId="formFile" className="mb-4">
                                        <div style={{ 
                                            border: '2px dashed #333', 
                                            borderRadius: '12px', 
                                            padding: '20px', 
                                            textAlign: 'center',
                                            backgroundColor: 'rgba(0,0,0,0.2)'
                                        }}>
                                            <Form.Label className="fw-semibold mb-3" style={{ color: '#00d4ff' }}>
                                                Select File
                                            </Form.Label>
                                            <Form.Control 
                                                type="file" 
                                                accept="image/*" 
                                                onChange={handleImageChange} 
                                                style={{ 
                                                    backgroundColor: '#111', 
                                                    border: '1px solid #444', 
                                                    color: '#fff' 
                                                }}
                                            />
                                        </div>
                                    </Form.Group>

                                    {imagePreviewUrl && (
                                        <div className="text-center mb-4 p-2" style={{ borderRadius: '12px', backgroundColor: '#000' }}>
                                            <h6 className="mb-3" style={{ color: '#bbb' }}> <FaImage /> Preview</h6>
                                            <img 
                                                src={imagePreviewUrl} 
                                                alt="Preview" 
                                                className="img-fluid rounded-2 border border-secondary"
                                                style={{ maxHeight: '250px' }}
                                            />
                                        </div>
                                    )}

                                    <div className="d-grid gap-2 mt-4">
                                        <Button 
                                            onClick={handleCreateMeme} 
                                            disabled={!selectedImage} 
                                            style={{ 
                                                backgroundColor: '#00d4ff', 
                                                border: 'none', 
                                                color: '#000', 
                                                fontWeight: '800',
                                                padding: '12px',
                                                borderRadius: '10px'
                                            }}
                                            className="hover-bright"
                                        >
                                            GENERATE EDITOR
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CreateYourOwnMeme;