// app/repair/page.js
import React from 'react';

export default function Repair() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-4 text-center">Request Repair</h2>
        <p className="text-base mb-8 text-center">
          Fill out the form below to request a repair service. You can also upload images of your device.
        </p>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeLyzsHmGCXjKG3RSxUGesZbAm3XY3kurdILdiFOOr5m61-Bg/viewform?embedded=true"
          width="100%"
          height="1200"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Repair Request Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}
