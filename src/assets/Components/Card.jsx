import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";


const MemeCard = (props) => {

    const navigate = useNavigate();
    
    return (
        <Card style={{ 
            backgroundColor: '#1a1a1a', 
            border: '1px solid #333',
            borderRadius: '15px',
            transition: 'all 0.3s ease',
            overflow: 'hidden'
        }} className="h-100 shadow-lg meme-hover-card">
            
            <Card.Img 
                variant="top" 
                src={props.img} 
                style={{ objectFit: 'contain', height: '200px', padding: '15px' }} 
            />
            
            <Card.Body style={{ backgroundColor: '#222', borderTop: '1px solid #333' }} className="d-flex flex-column justify-content-between">
                <Card.Title style={{ color: '#fff', fontSize: '1rem', fontWeight: '600' }} className="text-center mb-3">
                    {props.title}
                </Card.Title>
                
                <Button 
                    onClick={() => navigate(`/edit?url=${props.img}&title=${props.title}`)} 
                    variant="outline-info"
                    style={{ fontWeight: 'bold', borderRadius: '8px' }}
                >
                    Edit Meme
                </Button>
            </Card.Body>
        </Card>
    );
};

export default MemeCard;



