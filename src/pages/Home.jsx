import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MemeCard from "../assets/Components/Card";
import { getAllMemes } from '../api/memes';
import Navbar from "../assets/Components/Navbar";

const Homepage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAllMemes().then(memes => {
            setData(memes.data.memes);
        }).catch(error => {
            console.error("Error fetching memes:", error);
        });
    }, []);

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
                    <h2 style={{ fontWeight: '800', letterSpacing: '2px', color: '#fff' }}>EXPLORE TEMPLATES</h2>
                    <span className="badge rounded-pill bg-info text-dark" style={{ fontSize: '1rem' }}>
                        {data.length} Available
                    </span>
                </div>

                <Row>
                    {data.length > 0 ? (
                        data.map((element) => (
                            <Col key={element.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                                <MemeCard img={element.url} title={element.name} />
                            </Col>
                        ))
                    ) : (
                        <div className="text-center w-100 mt-5">
                            <div className="spinner-border text-info" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default Homepage;