import React from 'react';
import { Link } from 'react-router-dom';
const SignupPage = () => { 
  return (
    <div className="bg-gray-100">
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">Sign Up</h1>
          <form >
          <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Name</label>
              <input
                type="text"
                placeholder="name"
                id="name"
                name="name"
              
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Email</label>
              <input
                type="text"
                placeholder="name.lastname@domain"
                id="email"
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
              <button type="submit" style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }}>Submit</button>
            </div>
          </form>
          <div className="text-center">
            <p className="text-sm">Do you have an account? <Link to="/" className="text-cyan-600">Back for login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;