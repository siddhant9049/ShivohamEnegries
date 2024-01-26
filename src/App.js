// // src/App.js
// import React from 'react';
// // src/App.js
// // src/App.js
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import Hero from './Components/Hero';
// import WorkCards from './Components/WorkCards';
// import ProjectSection from './Components/ProjectSection';
// import CoverSection from './Components/CoverSection';
// import SolarSystemPage from './Components/SolarSystemPage.js'; // Import the new component
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Hero />
//         <WorkCards />
//         <CoverSection />
//         <ProjectSection />
//       </div>
//     </Router>
//   );
// }

// export default App;
// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
