import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";


const MemeCard = (props) => {
    const navigate = useNavigate();
    return(
        <Card className="w-72 m-4 flex flex-col rounded-lg shadow-lg overflow-hidden"  style = {{ width: '18rem', margin: '40px'}}>
            <Card.Img variant = 'top' src = {props.img}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Button onClick={e => navigate(`/edit?url=${props.img}&title=${ props.title }`)} variant = 'primary'>Edit</Button>
            </Card.Body>
        </Card>
    )
}

export default MemeCard;