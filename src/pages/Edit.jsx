import React, { useState } from "react";
import { useSearchParams } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import Text from "../assets/Components/Text";





const EditPage = () => {


    const [params] = useSearchParams();
    const [count, setCount] = useState(0);
    const addText = () => {
        setCount(count + 1);
    }

    return (
        <div>
        <div style={{display:'flex'}}>
            <img src = {params.get('url')} width='400px' />
            {
                Array(count).fill(0).map((e, i) => <Text key={i}/> )
            }
        </div>
        <Button onClick={addText}>Add Text</Button>
        </div>
    )
}

export default EditPage;