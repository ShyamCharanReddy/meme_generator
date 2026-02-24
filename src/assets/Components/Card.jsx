import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";


const MemeCard = (props) => {
    const navigate = useNavigate();
    return(
        <Card 
  className="flex flex-col rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/20" 
  style={{ 
    width: '18rem', 
    margin: '40px', 
    background: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white
    backdropFilter: 'blur(10px)',           // The "Glass" effect
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)' 
  }}
>
  <div className="h-48 overflow-hidden bg-black/20">
    <Card.Img 
      variant='top' 
      src={props.img} 
      className="w-full h-full object-contain" 
    />
  </div>
  
  <Card.Body className="p-4 flex flex-col justify-between grow">
    <Card.Title className="text-white font-bold text-lg mb-4 truncate">
      {props.title}
    </Card.Title>
    
    <Button 
      onClick={e => navigate(`/edit?url=${props.img}&title=${props.title}`)} 
      className="w-full bg-blue-600 hover:bg-blue-500 border-none py-2 rounded-md font-semibold transition-colors"
      variant='primary'
    >
      Edit Meme
    </Button>
  </Card.Body>
</Card>
    )
}

export default MemeCard;