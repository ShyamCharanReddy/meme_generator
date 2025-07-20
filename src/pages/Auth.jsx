import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../assets/Components/Navbar'
import '../App.css'


import { auth } from '../firebase'; 
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from "firebase/auth";
import Homepage from './Home';


  




const SimpleAuthForm = ({}) => {

    const [isLoginMode, setIsLoginMode] = useState(true); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [authenticated, setAuthenticated] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();

        if (isLoginMode) {
            setPersistence(auth, browserLocalPersistence)
            .then(() => signInWithEmailAndPassword(auth, email, password))
            .then(() => {
                
                navigate('/home'); 
            })
            .catch((error) => {
                alert(error.message);
            });
        } else {
            createUserWithEmailAndPassword(auth, email, password)
            .then(() => alert("Success in signing up, please login"))
            .catch((error) => alert(error.message));
        }

        setEmail('');
        setPassword('');
        
    };



  




    return (
        <div>
            
            
        <div className="auth-container">
            <div className="auth-card">
                <h2 className="auth-title">{isLoginMode ? 'Login' : 'Sign Up'}</h2>


                <div className="auth-button-group">
                    <button
                        className={isLoginMode ? 'auth-active-button' : 'auth-inactive-button'}
                        onClick={() => setIsLoginMode(true)}
                    >
                        Login
                    </button>
                    <button
                        className={!isLoginMode ? 'auth-active-button' : 'auth-inactive-button'}
                        onClick={() => setIsLoginMode(false)}
                    >
                        Sign Up
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="auth-form">
                    
                    <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="auth-input"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="auth-input"
                        required
                    />
                    <button type="submit" className="auth-submit-button" id='submit'>
                        {isLoginMode ? 'Login' : 'Sign Up'}
                    </button>
                </form>
            </div>
        </div>
        </div>
        
    );
};

export default SimpleAuthForm;
