import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Container, Row, Col, Card} from 'react-bootstrap';
import Navbar from '../assets/Components/Navbar'
import SimpleAuthForm from './Auth'



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
        } else {
            setSelectedImage(null);
            setImagePreviewUrl(null);
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
        <Container className="mt-5 pt-5 pb-5 create-meme-background"> 
            <Navbar />
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <Card className="shadow-lg p-4 rounded-4 border-0">
                        <Card.Body>
                            <h2 className="text-center mb-4 text-primary fw-bold">Upload Your Own Image</h2>
                            <p className="text-center text-muted mb-4">
                                Select an image from your device to start creating your meme!
                            </p>

                            {errorMessage && (
                                <div className="alert alert-danger" role="alert">
                                    {errorMessage}
                                </div>
                            )}

                            <Form>
                                <Form.Group controlId="formFile" className="mb-4">
                                    <Form.Label className="fw-semibold">Choose Image File:</Form.Label>
                                    <Form.Control 
                                        type="file" 
                                        accept="image/*" 
                                        onChange={handleImageChange} 
                                        className="p-2" 
                                    />
                                </Form.Group>

                                {imagePreviewUrl && (
                                    <div className="text-center mb-4 p-3 border rounded-3 bg-light">
                                        <h5 className="mb-3 text-secondary">Image Preview:</h5>
                                        <img 
                                            src={imagePreviewUrl} 
                                            alt="Image Preview" 
                                            className="img-fluid rounded-2 border border-light meme-preview-image"
                                        />
                                    </div>
                                )}

                                <div className="d-grid gap-2 mt-4">
                                    <Button 
                                        variant="primary" 
                                        onClick={handleCreateMeme} 
                                        disabled={!selectedImage} 
                                        className="py-2 fw-bold" 
                                    >
                                        Create Meme
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        
    );
};

export default CreateYourOwnMeme;
