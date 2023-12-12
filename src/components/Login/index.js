
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const userData = await response.json();
      console.log('Login successful:', userData);
    
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-md shadow-md">
  <h2 className="text-4xl font-bold mb-4">Login</h2>
  <form>
    <label className="block mb-2">
      Username:
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />
    </label>
    <label className="block mb-2">
      Password:
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />
    </label>
    <button
      type="button"
      onClick={handleLogin}
      className="bg-blue-500 text-white px-6 py-4 rounded hover:bg-blue-600"
    >
      Login
    </button>
  </form>
</div>
  );
};

export default Login;
