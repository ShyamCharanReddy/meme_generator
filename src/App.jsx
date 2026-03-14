import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from './pages/Home';
import CreateMeme from './pages/createMeme';
import EditPage from './pages/Edit';
import Login from './pages/Auth';
import History from './pages/History';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/home' element={<Homepage />} />
        <Route path='/create-meme' element={<CreateMeme />} />
        <Route path='/edit' element={<EditPage />} />
        <Route path='/' element={<Login />} />
        <Route path='/history' element={<History />} />
      </Routes>
    </div>
  );
}

export default App;