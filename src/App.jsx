import React from 'react'; // Ensure React is imported
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar'; // Ensure path and component case matches
import About from './pages/About'; 
import Galleries from './pages/Galleries'; // Check if spelling matches in the directory
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import Footer from './components/Footer'; // Ensure path and component case matches

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/galleries" element={<Galleries/>}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
