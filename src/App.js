import React, { useEffect, useContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
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
  }, [fetchDataCountries, fetchDataLeagues, fetchDataSeasons]);

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
            <Route path="/football_API/error-429" element={<ErrorPage />} />
            {apiDataLeagues.map((data) => (
              <Route key={data.league.id} path="/:country/:league/:type/:id" element={<Football />} />
            ))}
            <Route path="/competitions" element={<Competitions />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
