import React from 'react'; // Ensure React is imported
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Component/Navbar' // Ensure path and component case matches
import About from './Pages/About'; 
import Galleries from './Pages/Galleries';

import Footer from './Component/Footer'; // Ensure path and component case matches

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/galleries" element={<Galleries/>}/>
       
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
