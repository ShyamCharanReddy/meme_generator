import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase'; // adjust the path if needed

const CheckAuth = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
  console.log("CheckAuth useEffect running"); // ✅
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    console.log("User is", user);
    setIsAuthenticated(!!user);
    setLoading(false);
  });

  return () => unsubscribe();
}, []);


  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default CheckAuth;
