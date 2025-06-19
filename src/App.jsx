import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css'
import Home from './pages/Home';
import BreedDetail from './pages/BreedDetail';

function App() {
  
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/breed/:id' element={<BreedDetail/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App