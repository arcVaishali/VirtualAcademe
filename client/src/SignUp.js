import React, { useState } from 'react';
import { createUserWithEmailAndPassword,getAuth } from 'firebase/auth'; 
import { useNavigate } from 'react-router-dom';
import { app } from './Firebase'; 

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
    <div>
      <h1>SignUp Page</h1>
      <form>
        <div>
          <label htmlFor="email-address">Email Address</label>
          <input
            type="email"
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Holder"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            label="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <button type="submit" onClick={signUpUser}>
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUp;

