import React, { useState } from 'react';
import { app, db } from '../Firebase';
import { signInWithEmailAndPassword,getAuth } from 'firebase/auth'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const firebaseAuth = getAuth(app);

const PrivateMessaging = () => {
  const [message, setMessage] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('')

  const sendMessage = async (e) => {
    const currentUser = await signInWithEmailAndPassword(firebaseAuth,email,password)
    e.preventDefault();

    if (message.trim() === '') {
      alert('Enter a valid message');
      return;
    }

    const user = app.currentUser;
    if (!user) {
      alert('User is not authenticated. Please log in.');
      return;
    }

    // Destructure user properties
    const { uid, displayName, photoURL } = user;

    try {
      await addDoc(collection(db, 'messages'), {
        text: message,
        name: displayName || 'Anonymous', 
        photoUrl: photoURL || '', 
        createdAt: serverTimestamp(),
        uid,
      });
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <form onSubmit={(e) => sendMessage(e)} className="send-messages">
      <label htmlFor="messageInput">Enter Message</label>
      <input
        value={message}
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        id="messageInput"
        name="messageInput"
        placeholder="type message"
      />
      <button type="submit">Send</button>
    </form>

  );
};

export default PrivateMessaging;
