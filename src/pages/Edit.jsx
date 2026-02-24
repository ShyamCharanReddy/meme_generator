import React, { useState, useRef } from "react";
import { useSearchParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Text from "../assets/Components/Text";
import Navbar from "../assets/Components/Navbar";
import html2canvas from 'html2canvas'; 
import saveAs  from 'file-saver';

const EditPage = () => {
    const [params] = useSearchParams();
    const [count, setCount] = useState(0);

    const addText = () => {
        setCount(count + 1);
    }

    const memeRef = useRef(null);
    const name = params.get('title') || 'meme'; 

    const handleSave = () => {
        if (memeRef.current) {
            html2canvas(memeRef.current, {
                useCORS: true,  
            }).then(canvas => {
                canvas.toBlob(function(blob) {
                    saveAs(blob, `${name}.jpeg`);
                }, 'image/jpeg', 1); 
            }).catch(err => {
                console.error("Error capturing canvas:", err);
                alert("Failed to save image. Check console for details.");
            });
        }
    };

    return (
        <div>
            <div className="nav-bar">
                <Navbar/>
            </div>

            <div ref={memeRef} className="meme mt-5 mb-5" style={{ 
                    width: '400px', 
                    margin: '0 auto', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    position: 'relative',
                    border: '1px solid #ccc',
                    padding: '10px',
                    backgroundColor: '#fff',
                    overflow: 'hidden'
                    }}>
                        
                <img src={params.get('url')} width='400px' crossOrigin="anonymous" alt="Meme base" /> 
                {
                    Array(count).fill(0).map((e, i) => <Text key={i} />)
                }
            </div>
            <div style={{ padding: '20px' }}>
                <span style={{ padding: '20px' }}>
                    <Button onClick={addText}>Add Text</Button>
                </span>
                <span>
                    <Button variant='success' onClick={handleSave}>Save</Button>
                </span>
            </div>
        </div>
    )
}

export default EditPage;