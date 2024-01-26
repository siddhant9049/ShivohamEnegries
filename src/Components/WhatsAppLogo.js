// WhatsAppLogo.js
import React from 'react';
import Wp from "./IMG/WP.png"

const WhatsAppLogo = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '918007775521'; // Replace with your actual WhatsApp phone number
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '50%', // Adjust as needed
        left: '0px', // Adjust as needed
        cursor: 'pointer',
        zIndex: '500',
        transform: 'translateY(50%)', // Center vertically
      }}
      onClick={handleWhatsAppClick}
    >
      {/* Replace the image source with your WhatsApp logo */}
      <img src={Wp} alt="WhatsApp Logo" style={{ width: '50px', height: '50px' }} />
    </div>
  );
};

export default WhatsAppLogo;
