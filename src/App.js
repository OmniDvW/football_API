import React, { useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Football from "./pages/Football/Football";
import { ApiContext } from './context/apiContext';


const App = () => {
  const { apiDataLeagues, fetchDataCountries, fetchDataLeagues, fetchDataStandings } = useContext(ApiContext);

  useEffect(() => {
    fetchDataCountries();
    fetchDataLeagues();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {apiDataLeagues.map((data, index) => (
            <Route key={index} path={`/${data.country.name}/${data.league.name.replace(/\s/g, '')}/:id`} element={<Football />} />
          ))}
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
