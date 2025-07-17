import { useState } from 'react'
import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Home';
import EditPage from './pages/Edit';
import CreateMeme from './pages/createMeme';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>Meme Generator</h1>
      <Routes>
        <Route path='/' element={ <Homepage /> }></Route>
        <Route path='/create-meme' element={ <CreateMeme /> }></Route>
        <Route path='/edit' element={ <EditPage /> }></Route>
      </Routes>
    </div>
  )
}

export default App
