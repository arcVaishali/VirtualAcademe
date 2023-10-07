// import React,{useState} from 'react'
// import { signInWithEmailAndPassword,getAuth } from 'firebase/auth'
// import { app } from '../Firebase'; 
// import {  useNavigate} from 'react-router-dom'

// const firebaseAuth = getAuth(app);

// const Login = () => {
//     const navigate = useNavigate()
//     const [email,setEmail] = useState('');
//     const [password,setPassword] = useState('')
//     const onLogin = async(e) =>{
//         e.preventDefault();
//         await signInWithEmailAndPassword(firebaseAuth,email,password).then((userCredential)=>{
//             const user = userCredential.user;
//             navigate('/')
//             console.log(user);
//         }).catch((e)=>{
//             console.log('Error');
//         })
//     }
//   return (
//     <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
//             <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
//                 <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
//                    Sign in
//                 </h1>
//                 <form className="mt-6">
//                     <div className="mb-2">
//                         <label
//                             for="email"
//                             className="block text-sm font-semibold text-gray-800"
//                         >
//                             Email
//                         </label>
//                         <input className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" type="email" label="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email Holder' />
//                     </div>
//                     <div className="mb-2">
//                         <label
//                             for="password"
//                             className="block text-sm font-semibold text-gray-800"
//                         >
//                             Password
//                         </label>
//                         <input className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" type="password" label="Create Password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
//                     </div>
//                     <div className="mt-6">
//                       <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" type='submit' onClick={onLogin}>LogIn</button>
//                     </div>
//                 </form>

//                 <p className="mt-8 text-xs font-light text-center text-gray-700">
//                     {" "}
//                     Don't have an account?{" "}
//                     <a
//                         href="/signup"
//                         className="font-medium text-purple-600 hover:underline"
//                     >
//                         Sign up
//                     </a>
//                 </p>
//             </div>
//         </div>
//   )
// }

// export default Login
