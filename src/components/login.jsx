import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic (API call, validation, etc.)
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
      <div className="w-full max-w-lg p-10 bg-white rounded-3xl shadow-2xl border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-3xl sm:p-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8 transition duration-300 ease-in-out">
          Welcome Back
        </h2>

        <form onSubmit={handleLogin} className="space-y-8">
          {/* Email/Username Field */}
          <div className="relative">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-5 py-4 text-md bg-blue-50 border-b-4 border-blue-300 focus:bg-white rounded-lg focus:border-purple-500 focus:outline-none peer transition duration-300 ease-in-out shadow-sm hover:shadow-md"
              placeholder=" "
              required
            />
            <label className="absolute left-4 top-2 text-gray-500 transition-all transform scale-90 -translate-y-6 peer-placeholder-shown:translate-y-4 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-purple-600">
              Email/Username
            </label>
          </div>

          {/* Password Field */}
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-5 py-4 text-md bg-blue-50 border-b-4 border-blue-300 focus:bg-white rounded-lg focus:border-purple-500 focus:outline-none peer transition duration-300 ease-in-out shadow-sm hover:shadow-md"
              placeholder=" "
              required
            />
            <label className="absolute left-4 top-2 text-gray-500 transition-all transform scale-90 -translate-y-6 peer-placeholder-shown:translate-y-4 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-90 peer-focus:text-purple-600">
              Password
            </label>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <a href="/signup" className="text-purple-600 hover:text-purple-800 hover:underline transition duration-300 text-sm">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-full hover:shadow-xl hover:scale-105 transition duration-500 ease-in-out transform hover:-translate-y-1"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-8">
          <p className="text-md text-gray-600">
            Don't have an account?{' '}
            <a href="/signup" className="text-purple-600 font-semibold hover:text-purple-800 hover:underline transition duration-300">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
