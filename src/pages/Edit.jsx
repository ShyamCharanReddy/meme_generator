import React, { useState, useRef } from "react";
import { useSearchParams } from 'react-router-dom';
import { Button, Container, Stack, Form } from 'react-bootstrap';
import Text from "../assets/Components/Text";
import Navbar from "../assets/Components/Navbar";
import html2canvas from 'html2canvas'; 
import saveAs from 'file-saver';
import { saveMeme } from '../api/memes.js';
import { FaPlus, FaDownload, FaCloudUploadAlt, FaPalette } from 'react-icons/fa';

const EditPage = () => {
    const [params] = useSearchParams();
    const [textElements, setTextElements] = useState([]);
    const [selectedColor, setSelectedColor] = useState("#ffffff");
    
    const memeRef = useRef(null);
    const name = params.get('title') || 'meme'; 

    const addText = () => {
        // Give each text element a unique ID based on the exact time it was created
        const newText = { id: Date.now(), color: selectedColor };
        setTextElements([...textElements, newText]);
    };

    // New function to remove a specific text block
    const removeText = (idToRemove) => {
        setTextElements(textElements.filter(el => el.id !== idToRemove));
    };

    const handleDownload = () => {
        if (memeRef.current) {
            html2canvas(memeRef.current, { useCORS: true }).then(canvas => {
                canvas.toBlob((blob) => saveAs(blob, `${name}.jpeg`), 'image/jpeg', 1); 
            }).catch(err => alert(`Failed to download image. ${err}`));
        }
    };

    const handleSaveToDatabase = async () => {
        const token = localStorage.getItem('token');
        if (!token) return alert('Please login to save memes');

        if (memeRef.current) {
            try {
                const canvas = await html2canvas(memeRef.current, { useCORS: true });
                const base64Image = canvas.toDataURL('image/jpeg');
                const response = await saveMeme({ url: base64Image, topText: "", bottomText: "" }, token);
                if (response._id) alert('Meme saved successfully!');
            } catch (error) {
                alert('Error saving meme: ' + error.message);
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
            <Container className="text-center">
                <h2 style={{ fontWeight: '800', letterSpacing: '2px', marginBottom: '30px' }}>EDITOR</h2>
                
                <div style={{
                    display: 'inline-block',
                    padding: '20px',
                    backgroundColor: '#1a1a1a',
                    borderRadius: '20px',
                    border: '1px solid #333',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                    marginBottom: '40px'
                }}>
                    <div ref={memeRef} className="meme" style={{ 
                        width: '400px', 
                        position: 'relative',
                        backgroundColor: '#000',
                        overflow: 'hidden',
                        borderRadius: '8px'
                    }}>
                        <img 
                            src={params.get('url')} 
                            width='400px' 
                            crossOrigin="anonymous" 
                            alt="Meme base" 
                            style={{ display: 'block' }}
                        /> 
                        
                        {/* Pass the ID and the remove function to the Text component */}
                        {textElements.map((el) => (
                            <Text 
                                key={el.id} 
                                id={el.id} 
                                color={el.color} 
                                onRemove={removeText} 
                            />
                        ))}
                    </div>
                </div>

                <div className="d-flex justify-content-center">
                    <Stack direction="horizontal" gap={3} style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        padding: '10px 25px',
                        borderRadius: '50px',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                        <div className="d-flex align-items-center gap-2 px-2" style={{ borderRight: '1px solid #444' }}>
                            <FaPalette style={{ color: selectedColor }} />
                            <Form.Control
                                type="color"
                                value={selectedColor}
                                onChange={(e) => setSelectedColor(e.target.value)}
                                title="Choose text color"
                                style={{ width: '40px', height: '40px', padding: '2px', background: 'none', border: 'none', cursor: 'pointer' }}
                            />
                        </div>

                        <Button variant="outline-light" onClick={addText} className="d-flex align-items-center gap-2 rounded-pill px-4">
                            <FaPlus /> Add Text
                        </Button>
                        
                        <Button variant="outline-success" onClick={handleDownload} className="d-flex align-items-center gap-2 rounded-pill px-4">
                            <FaDownload /> Download
                        </Button>
                        
                        <Button onClick={handleSaveToDatabase} style={{
                            backgroundColor: '#00d4ff',
                            border: 'none',
                            color: '#000',
                            fontWeight: 'bold'
                        }} className="d-flex align-items-center gap-2 rounded-pill px-4">
                            <FaCloudUploadAlt /> Save to History
                        </Button>
                    </Stack>
                </div>
            </Container>
        </div>
    );
};

export default EditPage;