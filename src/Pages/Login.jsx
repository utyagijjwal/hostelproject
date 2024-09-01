import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Login data:', formData);
  };

  return (
    <div className="min-h-screen bg-red-500 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition duration-200"
          >
            Login
          </button>
        </form>
        <div className="text-center text-gray-500">
          <p>Don't have an account? <a href="#" className="text-red-500 hover:underline">Register</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
