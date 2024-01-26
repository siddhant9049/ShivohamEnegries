// src/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import WorkCards from './Components/WorkCards';
import CoverSection from './Components/CoverSection';
import SolarSystemPage from './Components/CARDS/SolarSystemPage';
import SolarWaterPump from './Components/CARDS/SolarWaterPump';
import AEW from './Components/CARDS/SolarAEW';
import Footer from './Components/Footer';
import BrandAssociations from './Components/BrandAssociations.js';
import FlipCard from './Components/Info.js';
import WhatsAppLogo from './Components/WhatsAppLogo.js';
import SegmentsSection from './Components/SEGMENTS/SegmentsSection.js';
import ResidentialPage from './Components/SEGMENTS/residentialPage.js';
import ProjectSection from "./Components/ProjectSection.js"
import SolarPowerInfo from './Components/SolarPowerInfo.js';
import ShivohamWorkflow from './Components/ShivohamWorkflow.js';


function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Navbar />
            <Hero />
            <SolarPowerInfo/>
            <WhatsAppLogo />
            <WorkCards />
        
            <CoverSection />
            <SegmentsSection/>
            <ProjectSection/>
            <ShivohamWorkflow/>
           
            <BrandAssociations/>
            <FlipCard/>
            
            <Footer/>
          </div>
        }
      />
       <Route path="/residential" element={<ResidentialPage/>} />
      <Route path="/solar-system-rooftop" element={<SolarSystemPage />} />
      <Route path="/solarWP" element={<SolarWaterPump />} />
      <Route path="/AEW" element={<AEW />} />


    </Routes>
  );
}

export default AppRoutes;
