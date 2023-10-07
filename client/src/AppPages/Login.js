import React,{useState} from 'react'
import { signInWithEmailAndPassword,getAuth } from 'firebase/auth'
import { app } from '../Firebase'; 
import {  useNavigate} from 'react-router-dom'

const firebaseAuth = getAuth(app);

const Login = () => {
    const navigate = useNavigate()
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const onLogin = async(e) =>{
        e.preventDefault();
        await signInWithEmailAndPassword(firebaseAuth,email,password).then((userCredential)=>{
            const user = userCredential.user;
            navigate('/')
            console.log(user);
        }).catch((e)=>{
            console.log('Error');
        })
    }
  return (
    <div>
        <h1>Login Page</h1>
      <form>
        <div>
            <label htmlFor="email-address">Email Address</label>
            <input type="email" label="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email Holder' />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" label="Create Password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
        </div>
        <button type='submit' onClick={onLogin}>LogIn</button>
      </form>
    </div>
  )
}

export default Login
