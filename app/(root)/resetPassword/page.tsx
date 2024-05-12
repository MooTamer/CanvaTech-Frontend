import React from 'react';
import 'tailwindcss/tailwind.css';

const ResetPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card lg:card-side bg-base-100 shadow-xl w-1/2 max-w-[70rem] flex justify-center items-center">
        <div className="hidden md:block md:w-1/2">
          <img src="reset.jpg" alt="Reset Image" className="w-full h-full rounded-md shadow-xl" />
        </div>
        <div className="px-10 py-12 flex flex-col justify-center items-center md:flex-grow"> {}
          <div className="mb-2 text-center"> 
            <h2 className="card-title">Reset your password<span className="text-blue-500" style={{ marginLeft: '-0.5rem' }}>.</span></h2>
            <p className="text-sm text-gray-500">Enter the email address you used to register with.</p>
          </div>
          <input
            type="email"
            id="email"
            className="input input-bordered mt-4"
            placeholder="Email"
          />
          <div className="flex justify-center md:justify-end items-center mt-4"> {}
            <div className="m-0.5 flex flex-row space-x-2 items-center">
              <button className="btn btn-secondary w-1/3 items-center bg-gray-300 hover:bg-gray-400 text-gray-800 text-sm mr-2">Back</button>
              <button className="btn btn-primary w-2/3 items-center ml-2">Send instructions</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPage;
