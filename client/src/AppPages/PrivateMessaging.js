import React, { useState, useEffect } from 'react';
import { app, db } from '../Firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useAuth0 } from '@auth0/auth0-react';
import { onSnapshot } from 'firebase/firestore';

const PrivateMessaging = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [selectedUser, setSelectedUser] = useState(null); 
  const users = ['Vaishnavi', 'Vidip', 'Vaishali','Maruthi']; 

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
        receiver: selectedUser,
      });
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  // Filter messages based on the selected user
  const filteredMessages = messages.filter(
    (msg) =>
      (msg.name === user.email && msg.receiver === selectedUser) ||
      (msg.name === selectedUser && msg.receiver === user.email)
  );

  return (
    <div className="chat-app">
      <div className="user-list">
        <h2>Users</h2>
        <ul>
          {/* Display a list of users and handle user selection */}
          {users.map((u) => (
            <li
              key={u}
              onClick={() => setSelectedUser(u)}
              className={u === selectedUser ? 'selected' : ''}
            >
              {u}
            </li>
          ))}
        </ul>
      </div>
      <div className="chat">
        {selectedUser && (
          <>
            <h2>Chat with {selectedUser}</h2>
            <div className="messages">
              {filteredMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={msg.name === user.email ? 'sent' : 'received'}
                >
                  <strong>{msg.name}</strong>: {msg.text}
                </div>
              ))}
            </div>
            <form onSubmit={(e) => sendMessage(e)} className="send-messages">
              <input
                value={message}
                type="text"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message"
              />
              <button type="submit">Send</button>
            </form>
            <button onClick={() => logout()}>Log Out</button>
          </>
        )}
      </div>
    </div>
  );
};

export default PrivateMessaging;
