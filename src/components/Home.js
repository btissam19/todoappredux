import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ListPage from './ListPage';

function Home() {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get('http://localhost:4000/auth')
      .then(res => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setEmail(res.data.name);
        } else {
          setAuth(false);
          setMessage(res.data.Error);
        }
      })
      .catch(error => {
        console.error('Error during authentication:', error);
      });
  }, []);

  const handleLogout = () => {
    axios.get('http://localhost:4000/logout')
      .then(res => {
        window.location.reload(true);
      })
      .catch(err => console.error('Error during logout:', err));
  };

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-md w-full pt-6 pb-0 pl-6 pr-6 rounded-lg shadow-lg">
        {auth ? (
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold text-gray-500">You are authorized, {email}</h3>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Logout
              </button>
            </div>
            <ListPage />
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">You are NOT authorized</h3>
            <Link to="/">
              <h3 className="text-blue-500 hover:underline cursor-pointer">Login now</h3>
            </Link>
            <p className="text-red-500">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
