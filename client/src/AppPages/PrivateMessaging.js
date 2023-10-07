import React, { useState, useEffect } from 'react';
import { app, db } from '../Firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useAuth0 } from '@auth0/auth0-react';
import { onSnapshot } from 'firebase/firestore';

const PrivateMessaging = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0(); 
  
  useEffect(() => {
    if (isAuthenticated) {
      const q = collection(db, 'messages');

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const newMessages = [];
        snapshot.forEach((doc) => {
          newMessages.push({ id: doc.id, ...doc.data() });
        });
        setMessages(newMessages);
      });

      return () => {
        unsubscribe();
      };
    }
  }, [isAuthenticated]);

  const sendMessage = async (e) => {
    e.preventDefault();
  
    if (!isAuthenticated) {
      loginWithRedirect();
      return;
    }
  
    if (message.trim() === '') {
      alert('Enter a valid message');
      return;
    }
  
    const userEmail = user.email; 
  
    try {
      await addDoc(collection(db, 'messages'), {
        text: message,
        name: userEmail, 
        createdAt: serverTimestamp(),
      });
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <button onClick={() => logout()}>Log Out</button>
          <form onSubmit={(e) => sendMessage(e)} className="send-messages">
            <label htmlFor="messageInput">Enter Message</label>
            <input
              value={message}
              type="text"
              onChange={(e) => setMessage(e.target.value)}
              id="messageInput"
              name="messageInput"
              placeholder="Type a message"
            />
            <button type="submit">Send</button>
          </form>
          <div className="messages">
            {messages.map((msg) => (
              <div key={msg.id}>
                <strong>{msg.name}</strong>: {msg.text}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <button onClick={() => loginWithRedirect({ appState: { returnTo: '/messages' } })}>Log In</button>
      )}
    </div>
  );
};

export default PrivateMessaging;
