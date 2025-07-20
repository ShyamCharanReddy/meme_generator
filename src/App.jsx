import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from './pages/Home';
import CreateMeme from './pages/createMeme';
import EditPage from './pages/Edit';
import Login from './pages/Auth';


import { signOut } from "firebase/auth";
import { auth } from './firebase';







function App() {

useEffect(() => {
  signOut(auth); 
}, []);

const [authenticated, setAuthenticated] = useState(false);

  return (
    <div className='App'>
      <Routes>
        <Route path='/home' element={<Homepage />} />
        <Route path='/create-meme' element={<CreateMeme />} />
        <Route path='/edit' element={<EditPage />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </div>
  );
}


export default App;