import React, { useState } from 'react';
import { createUserWithEmailAndPassword,getAuth } from 'firebase/auth'; 
import { useNavigate } from 'react-router-dom';
import { app } from '../Firebase'; 

const auth = getAuth(app);

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUpUser = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    createUserWithEmailAndPassword(auth, email, password)
      .then((value) => {
        alert('Success');
        console.log(value);
        navigate('/')
      })
      .catch((error) => {
        console.error('Error signing up:', error);
      });
  };
  
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <form>
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline">SignUp Page</h1>
          <label className="block text-sm font-semibold text-gray-800" htmlFor="email-address">Email Address</label>
          <input
            type="email"
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Holder"
            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <label className="block text-sm font-semibold text-gray-800" htmlFor="password">Password</label>
          <input
            type="password"
            label="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          <div className='mt-6'>
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" type="submit" onClick={signUpUser}>
            SignUp
            </button>
          </div>
        </div>
        
      </form>
    </div>
  );
};

export default SignUp;

