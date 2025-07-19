import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from './pages/Home';
import CreateMeme from './pages/createMeme';
import EditPage from './pages/Edit';
import Login from './pages/Auth';
import CheckAuth from './assets/Components/CheckAuth';


import { signOut } from "firebase/auth";
import { auth } from './firebase';







function App() {

useEffect(() => {
  signOut(auth); // Force logout to test CheckAuth
}, []);
  return (
    <div className='App'>
      <Routes>
        <Route path='/home' element={<CheckAuth><Homepage /></CheckAuth>} />
        <Route path='/create-meme' element={<CheckAuth><CreateMeme /></CheckAuth>} />
        <Route path='/edit' element={<CheckAuth><EditPage /></CheckAuth>} />
        <Route path='/' element={<Login />} />
      </Routes>
    </div>
  );
}


export default App;