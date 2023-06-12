import React, { useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Football from "./pages/Football/Football";
import { ApiContext } from './context/apiContext';
import moment from 'moment';


const App = () => {
  const { apiDataLeagues, apiDataFixtures, fetchDataCountries, fetchDataLeagues, fetchDataSeasons, fetchDataFixtures } = useContext(ApiContext);
  const date = moment().format('YYYY-MM-DD');

  useEffect(() => {
    fetchDataCountries();
    fetchDataLeagues();
    fetchDataSeasons();
    fetchDataFixtures(date); //recherche aussi par id de league ou par round par saison par id de fixture
    console.log(date);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {apiDataLeagues.map((data) => (
            <Route key={data.league.id} path="/:country/:league/:type/:id" element={<Football />} />
          ))}
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
