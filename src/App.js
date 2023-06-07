import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApiProvider } from './context/apiContext';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Football from "./pages/Football/Football";


const App = () => {
  return (
    <div>
      <ApiProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path="/football" element={<Football />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ApiProvider>
    </div>
  );
};

export default App;