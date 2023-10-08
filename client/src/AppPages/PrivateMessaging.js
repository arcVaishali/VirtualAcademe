import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3500'); // Replace with your server URL

function App() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setMessages([...messages, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, [messages]);

  const sendMessage = () => {
    if (message) {
      socket.emit('chat message', message);
      setMessage('');
    }
  };

  return (
    <div className="App">
      <h1>Chat App</h1>
      <div className="chat-window">
        <div className="message-container">
          {messages.map((msg, index) => (
            <div key={index} className="message">
              {msg}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Type your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
