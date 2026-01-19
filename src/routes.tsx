import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Books from './pages/Books'
import Canvas from './pages/Canvas'
import Draws from './pages/Draws'
import Entre from './pages/Entrevistas'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/books" element={<Books />} />
    <Route path="/draws" element={<Draws />} />
    <Route path="/canvas" element={<Canvas />} />
    <Route path="/entrevistas" element={<Entre />} />
  </Routes>
)

export default Rotas
