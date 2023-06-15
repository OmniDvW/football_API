import React, { useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Football from "./pages/Football/Football";
import { ApiContext } from './context/apiContext';
import moment from 'moment';
import "./styles/app.scss";


const App = () => {
  const { apiDataLeagues, fetchDataCountries, fetchDataLeagues, fetchDataSeasons, fetchDataFixtures } = useContext(ApiContext);
  const date = moment().format('YYYY-MM-DD');

  useEffect(() => {
    fetchDataCountries();
    fetchDataLeagues();
    fetchDataSeasons();
    fetchDataFixtures(date); //recherche aussi par id de league ou par round par saison par id de fixture
  }, []);

  return (
    <div className='app-wrapper'>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
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
