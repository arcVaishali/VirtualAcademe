// import React, { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { app } from "../Firebase";
// import { useNavigate } from "react-router-dom";

// const SignUp = async () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const onSubmit = async (e) => {
//     e.preventDefault();
//   };

//   await createUserWithEmailAndPassword(app, email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       console.log(user);
//       navigate("/login");
//     })
//     .catch((e) => {
//       console.error(e);
//     });
//   return (
//     <div>
//       <h1>SignUp Page</h1>
//       <form>
//         <div>
//           <label htmlFor="email-address">Email Address</label>
//           <input
//             type="email"
//             label="Email Address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email Holder"
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             label="Create Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Password"
//           />
//         </div>
//         <button type="submit" onClick={onSubmit}>
//           SignUp
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;
