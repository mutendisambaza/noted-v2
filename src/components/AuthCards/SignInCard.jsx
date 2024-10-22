// import logo from "../../assets/logo.png"
import React, { useState } from 'react';
import { Link } from "react-router-dom";

export const SignInCard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleSignIn = (event) => {
  //   event.preventDefault();
  //   // Implement your sign-in logic here, e.g., making an API call
  //   console.log("Signing in with:", email, password);
  // };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <form className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg" >
      {/* onSubmit={handleSignIn} */}
        <h1 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Sign in to your account</h1>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
        <input
          type="email"
          id="email"
          className="w-full p-2 mb-4 border rounded-lg"
          placeholder="name@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
        <input
          type="password"
          id="password"
          className="w-full p-2 mb-4 border rounded-lg"
          placeholder="••••••••"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Sign in</button>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          Don't have an account? <Link to="/register" className="text-primary-600 hover:underline dark:text-primary-500 hover:text-gradient">Register here</Link>
        </p>
      </form>
    </div>
  );
};


