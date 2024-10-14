import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Add signup logic here (API call, validation, etc.)
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-teal-500 to-purple-500 animate-gradient-x">
      <div className="w-full max-w-lg p-8 bg-white rounded-2xl shadow-lg transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">Join Us</h2>

        <form onSubmit={handleSignup} className="space-y-6">
          {/* Username Field */}
          <div className="relative">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full px-4 py-3 text-sm placeholder-transparent border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none peer"
              placeholder="Username"
              required
            />
            <label className="absolute top-0 left-0 text-gray-500 transition-all transform scale-75 -translate-y-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-3 peer-focus:scale-75 peer-focus:-translate-y-6">
              Username
            </label>
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-3 text-sm placeholder-transparent border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none peer"
              placeholder="Email"
              required
            />
            <label className="absolute top-0 left-0 text-gray-500 transition-all transform scale-75 -translate-y-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-3 peer-focus:scale-75 peer-focus:-translate-y-6">
              Email
            </label>
          </div>

          {/* Password Field */}
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-3 text-sm placeholder-transparent border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none peer"
              placeholder="Password"
              required
            />
            <label className="absolute top-0 left-0 text-gray-500 transition-all transform scale-75 -translate-y-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-3 peer-focus:scale-75 peer-focus:-translate-y-6">
              Password
            </label>
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="block w-full px-4 py-3 text-sm placeholder-transparent border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none peer"
              placeholder="Confirm Password"
              required
            />
            <label className="absolute top-0 left-0 text-gray-500 transition-all transform scale-75 -translate-y-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-3 peer-focus:scale-75 peer-focus:-translate-y-6">
              Confirm Password
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 hover:shadow-lg transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
