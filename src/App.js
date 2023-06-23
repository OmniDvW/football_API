import React, { useEffect, useContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Competitions from "./pages/Competitions/Competitions";
import Football from "./pages/Football/Football";
import { ApiContext } from './context/apiContext';
import "./styles/app.scss";


const App = () => {
  const { apiDataLeagues, fetchDataCountries, fetchDataLeagues, fetchDataSeasons, isSidebarOpen, resetSidebar } = useContext(ApiContext);
  const [isBackgroundBlur, setIsBackgroundBlur] = useState(false);

  const handleToggleSidebar = () => {
    resetSidebar()
    setIsBackgroundBlur(!isBackgroundBlur);
  };

  useEffect(() => {
    fetchDataCountries();
    fetchDataLeagues();
    fetchDataSeasons();
  }, []);

  return (
    <div className='app-wrapper'>
      <BrowserRouter>
        <div className={`burger-background ${isSidebarOpen ? 'blur' : ''}`} onClick={handleToggleSidebar}>
        </div>
        <Navbar handleToggleSidebar={handleToggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} />
        <div className='app-container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {apiDataLeagues.map((data) => (
              <Route key={data.league.id} path="/:country/:league/:type/:id" element={<Football />} />
            ))}
            <Route path="/competitions" element={<Competitions />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
};

export default App;
