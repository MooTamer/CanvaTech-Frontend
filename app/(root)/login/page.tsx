import React from 'react';
import 'tailwindcss/tailwind.css';

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-xl w-3/4 max-w-3xl rounded-lg overflow-hidden flex">
        <figure className="w-1/2">
          <img src="serviap-logistics-types-of-pallets1.jpg" alt="PP" className="w-full h-full object-cover opacity-75" />
        </figure>
        <div className="w-1/2 p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Hello Again<span className="text-blue-500">!</span></h2>
            <p className="text-sm text-gray-500">Don't have an account? <a href="/register" className="text-blue-500">Sign up</a></p>
          </div>
          <div className="flex flex-col space-y-4">
            <input
              type="email"
              id="email"
              className="border rounded-lg px-4 py-2"
              placeholder="Email"
            />
            <input
              type="password"
              id="password"
              className="border rounded-lg px-4 py-2"
              placeholder="Password"
            />
            <p className="text-sm text-gray-500">Forgot your password? <a href="/resetPassword" className="text-blue-500">Reset Password</a></p>
          </div>
          <div className="mt-8">
            <button className="bg-blue-500 text-white rounded-lg py-2 px-8 hover:bg-blue-600 transition duration-300 ease-in-out w-full">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
