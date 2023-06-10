import React, { useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Football from "./pages/Football/Football";
import { ApiContext } from './context/apiContext';


const App = () => {
  const { apiDataLeagues, fetchDataCountries, fetchDataLeagues, fetchDataSeasons } = useContext(ApiContext);

  useEffect(() => {
    fetchDataCountries();
    fetchDataLeagues();
    fetchDataSeasons();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {apiDataLeagues.map((data) => (
            <Route key={data.league.id} path="/:country/:league/:id" element={<Football />} />
          ))}
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
