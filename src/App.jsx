import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Forcaster from './pages/Forcaster.jsx';
import Navbar from './components/Navbar.jsx';
import AboutUs from './pages/AboutUs.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forcaster" element={<Forcaster />} />
        <Route path='/aboutus' element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;