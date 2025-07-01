// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
// Assuming you have this page

function App() {
  return (
    <Router>
      {/* Top persistent navigation stack */}
      <TopBar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
       
        {/* Add more pages if needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
