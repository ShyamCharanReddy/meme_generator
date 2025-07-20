import React, { useEffect, useState } from "react";
import MemeCard from "../assets/Components/Card";
import { getAllMemes } from '../api/memes';
import Navbar from "../assets/Components/Navbar";


const Homepage = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        getAllMemes().then(memes => {
            console.log(memes.data.memes);
            setData(memes.data.memes)
        }).catch(error => {
            console.error("Error fetching memes:", error);
        });
    }, [])
    return (
        <div>
        <div className="nav-bar">
            <Navbar/>
        </div>
        <div className="row" style={{margin:'60px'}}>
            {
                data.map(element => <MemeCard key = {element.id} img = {element.url} title = {element.name}/>)
            }
            

        </div>
        </div>
    )
}

export default Homepage;