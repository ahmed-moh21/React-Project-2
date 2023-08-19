import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './Component/NavBar/Navar';
import Body from './Component/Body/Body';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Error from './Component/Error/Error';
import Card from './Component/Card/Card';
import Amazon from './Component/amazon';


function App() {

  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    setCart([...cart, item]);

    console.log(cart)
  };


  return (
    <BrowserRouter>

      <div className="App">
        <NavBar />
        
        <Routes>
          <Route path="/home" element={<Body />} />
          <Route path="/menu" element={<Amazon cart={cart} handleClick={handleClick} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Error />} />
          <Route path="/card" element={<Card cart={cart} />} />
        </Routes>
      </div>

    </BrowserRouter>

  );
}
export default App;
