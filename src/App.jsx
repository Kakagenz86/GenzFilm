import LandingPages from './pages/landing pages'
import DetailMovie from './pages/DetailPages';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/detail/:id" element={<DetailMovie />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
