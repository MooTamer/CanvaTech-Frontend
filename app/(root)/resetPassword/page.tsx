import React from 'react';
import 'tailwindcss/tailwind.css';

const ResetPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-xl w-1/2 max-w-3xl flex justify-center items-center">
        <div className="hidden md:block md:w-1/2">
          <img src="reset.jpg" alt="Reset Image" className="w-full h-full rounded-md shadow-xl" />
        </div>
        <div className="px-10 py-12 flex flex-col justify-center items-center md:flex-grow">
          <div className="mb-2 text-center">
            <h2 className="text-3xl font-bold mb-2">Reset Your Password<span className="text-blue-500">.</span></h2>
            <p className="text-sm text-gray-500">Enter the email address you used to register with.</p>
          </div>
          <input
            type="email"
            id="email"
            className="border rounded-lg px-4 py-2 mt-4 w-full"
            placeholder="Email"
          />
          <div className="flex justify-center items-center mt-4 w-full">
            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-6 text-sm">
              Send Instructions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPage;
