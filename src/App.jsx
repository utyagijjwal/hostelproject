import React from 'react'; // Ensure React is imported
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Component/Navbar' // Ensure path and component case matches
import About from './Pages/About'; 
import Galleries from './Pages/Galleries';

import Footer from './Component/Footer'; // Ensure path and component case matches
import Contact from './Pages/Contact';
import Register from './Pages/Register';
import Login from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/galleries" element={<Galleries/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
       
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
