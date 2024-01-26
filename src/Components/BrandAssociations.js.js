// Explore our partnerships and associations
// src/components/BrandAssociations.js
import React from 'react';
import "./BrandAssociations.css"
import waree from "./Brand-Images/Waree.jpeg"
import vikram from "./Brand-Images/vikram.png"
import kasolare from "./Brand-Images/ksolare.jpeg"
import renwsys from "./Brand-Images/Renewsys.png"
import Growwatt from "./Brand-Images/Growatt.jpg"
import Polycab from  "./Brand-Images/Polycab.jpeg"
const BrandAssociations = () => {
  // Define the brands you want to showcase
  const brands = [
    { id: 1, name: 'Waree', logo: waree },
    { id: 2, name: 'Vikram', logo: vikram },
    { id: 2, name: 'Renewsys', logo: renwsys },
    { id: 2, name: 'K-Salare', logo:  kasolare},
    { id: 2, name: 'Growatt', logo:  Growwatt},
    { id: 2, name: 'Polycab', logo:  Polycab}


    // Add more brands as needed
  ];

  return (
    <div className="brand-associations">
      <h2>Our Association Brands</h2>
      <div className="brand-list">
        {brands.map(brand => (
          <div key={brand.id} className="brand-item">
            <img src={brand.logo} alt={brand.name} />
            {/* <p>{brand.name}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandAssociations;
