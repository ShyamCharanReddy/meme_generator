import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { registerUser, loginUser } from '../api/memes.js';
import { FaUserAlt, FaEnvelope, FaLock, FaUserPlus, FaSignInAlt } from 'react-icons/fa';

const SimpleAuthForm = () => {
    const [isLoginMode, setIsLoginMode] = useState(true); 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (isLoginMode) {
                const data = await loginUser({ email, password });
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    navigate('/home'); 
                } else {
                    alert(data.message || 'Login failed');
                }
            } else {
                const data = await registerUser({ name, email, password });
                if (data.message === 'User registered successfully') {
                    alert("Success! Please login.");
                    setIsLoginMode(true);
                } else {
                    alert(data.message || 'Registration failed');
                }
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="auth-page-wrapper">
            <div className="auth-container">
                <div className="auth-card">
                    <div className="auth-header">
                        <div className="auth-icon-circle">
                            {isLoginMode ? <FaSignInAlt /> : <FaUserPlus />}
                        </div>
                        <h2 className="auth-title">{isLoginMode ? 'Welcome Back' : 'Join Memer'}</h2>
                        <p className="auth-subtitle">
                            {isLoginMode ? 'Login to access your memes' : 'Create an account to save history'}
                        </p>
                    </div>

                    <div className="auth-toggle-group">
                        <button
                            className={isLoginMode ? 'auth-toggle-btn active' : 'auth-toggle-btn'}
                            onClick={() => setIsLoginMode(true)}
                        >
                            Login
                        </button>
                        <button
                            className={!isLoginMode ? 'auth-toggle-btn active' : 'auth-toggle-btn'}
                            onClick={() => setIsLoginMode(false)}
                        >
                            Sign Up
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="auth-form">
                        {!isLoginMode && (
                            <div className="input-group">
                                <FaUserAlt className="input-icon" />
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required={!isLoginMode}
                                />
                            </div>
                        )}
                        <div className="input-group">
                            <FaEnvelope className="input-icon" />
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <FaLock className="input-icon" />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="auth-submit-btn">
                            {isLoginMode ? 'LOGIN' : 'REGISTER'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SimpleAuthForm;