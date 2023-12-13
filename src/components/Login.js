import React from 'react';
import { Link } from 'react-router-dom';
const LoginPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">Login</h1>

          <form >
            <div className="mb-6">
              <label htmlFor="username" className="block mb-2 text-sm text-gray-600">Username</label>
              <input
                type="text"
                placeholder="name"
                id="username"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm text-gray-600">Password</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>

            <div className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white text-center py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6">
              <input type="submit" value="Submit" style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }} />
            </div>
          </form>

          <div className="text-center">
            <p className="text-sm"><Link to="/register" className="text-cyan-600">Register here</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;