'use client'
import React, { useState } from 'react';

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
        DE C.Hub
      </div>

      <div className="flex space-x-4">
      
        {/* Contact Us button leading to WhatsApp */}
        <a
          href="https://wa.me/2348036409836?text=Hi%20De%20Chuks%20Technologies,%20I%20need%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
}
