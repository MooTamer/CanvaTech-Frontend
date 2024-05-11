import React from 'react';
import 'tailwindcss/tailwind.css';

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card lg:card-side bg-base-100 shadow-xl w-3/4 max-w-[70rem]">
        <figure><img src="serviap-logistics-types-of-pallets1.jpg" alt="PP" style={{ width: '100%', height: '100%' }} className="opacity-50" /></figure>
        <div className="px-10 py-12 flex flex-col justify-between space-y-8">
          <div className="mb-2">
        <h2 className="card-title">Hello Again<span className="text-blue-500" style={{ marginLeft: '-0.5rem' }}>!</span></h2>
          <p className="text-sm text-gray-500">Don't Have An Account? <a href="/register" className="text-blue-500">Sign up</a></p>
          </div>
          <div className="flex flex-col  space-y-4">
          <input
            type="email"
            id="email"
            className="input input-bordered"
            style={{ marginTop: '-0.5rem'}}
            placeholder="Email"
            />
          <input
            type="password"
            id="password"
            className="input input-bordered mt-2"
            placeholder="Password"
            />
          <p className="text-sm text-gray-500">Forgot Your Password? <a href="/resetPassword" className="text-blue-500">Reset Password</a></p>
            </div>
          <div className="m-0.5 flex-col flex space-x-2 items-center ">
            <button className="btn btn-primary w-1/2 items-center">Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
