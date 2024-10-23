// app/page.js
'use client'
import React from 'react';
import Navbar from './components/Navbar';
import Image from 'next/image';


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-blue-800 via-blue-900 to-black min-h-screen flex items-center justify-center relative">
        <div className="bg-white p-6 md:p-12 rounded-lg shadow-xl max-w-4xl mx-auto z-10">
          <div className=' sm:flex pb-10 '>
            <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Welcome to DE Chuks TECHNOLOGIES
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-12">
            Your trusted source for high-quality UK used laptops, accessories, and comprehensive IT solutions.
          </p>
            </div>
     

          <Image src="https://plus.unsplash.com/premium_photo-1664301887532-328f07bb2c24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFwdG9wJTIwcmVwYWlyfGVufDB8fDB8fHww" 
          width={500}
           height={100}
           className='h-[200px] justify-center items-center py-auto px-auto rounded-sm'/>
          </div>
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-white text-center mb-4 rounded-sm bg-blue-950">Our Products</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Laptops (UK Used)</li>
                <li>Accessories</li>
                <li>Desktops</li>
                <li>Desktop Power Packs</li>
                <li>Monitors</li>
                <li>Projectors</li>
                <li>Printers</li>
                <li>CCTV Cameras</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-white text-center mb-4 rounded-sm bg-blue-950">Our Services</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Laptops & Desktops Repair & Maintenance</li>
                <li>Software Installation</li>
                <li>CCTV/Cameras Installation</li>
                <li>Projector Installation</li>
                <li>Screen Replacement</li>
                <li>RAM Upgrades</li>
                <li>Hard Drive Replacement (SSD/HDD)</li>
                <li>Laptop Skin & Casing</li>
              </ul>
            </div>
          </div>

          <div className=" flex flex-col justify-center items-center gap-10 pb-10 sm:flex-row ">
            <a
              href="/product"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Browse Products
            </a>
            <a
              href="/repair"
              className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
            >
              Request Repair
            </a>
          </div>

          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-semibold text-white text-center mb-4 rounded-sm bg-blue-950">Office Address</h2>
            <p className="text-base md:text-lg text-gray-600">Ogui Road, Namdi Azikiwe Stadium, Enugu</p>
          </div>
        </div>
      </div>
    </div>
  );
}
