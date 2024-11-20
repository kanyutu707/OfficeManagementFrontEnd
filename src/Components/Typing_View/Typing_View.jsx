// Typing_View.jsx
import React, { useEffect, useRef, useState } from 'react';
import { IoIosSend } from "react-icons/io";
import { CiLink } from "react-icons/ci";
import Profile from '../Profile/Profile';
import io from 'socket.io-client';
import "./Typing_View.css";

// Create socket instance with error handling
let socket;

const initializeSocket = () => {
  try {
    if (!socket) {
      socket = io('http://localhost:4000', {
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 1000,
        timeout: 10000,
        transports: ['websocket', 'polling'], // Try WebSocket first, fallback to polling
      });
    }
    return socket;
  } catch (error) {
    console.error('Socket initialization error:', error);
    return null;
  }
};

const Typing_View = () => {
  const [message, setMessage] = useState('');
  const [recipient_id, setRecipient] = useState('');
  const [messagesReceived, setMessagesReceived] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [connectionError, setConnectionError] = useState('');
  const messagesColumnRef = useRef(null);
  const sender_id = sessionStorage.getItem('loggedIn');

  // Initialize socket connection
  useEffect(() => {
    const newSocket = initializeSocket();
    
    if (newSocket) {
      // Connection successful
      newSocket.on('connect', () => {
        console.log('Connected to socket server');
        setIsConnected(true);
        setConnectionError('');
      });

      // Connection failed
      newSocket.on('connect_error', (error) => {
        console.error('Connection error:', error);
        setIsConnected(false);
        setConnectionError('Unable to connect to chat server. Please check if the server is running.');
      });

      // Disconnected
      newSocket.on('disconnect', () => {
        console.log('Disconnected from socket server');
        setIsConnected(false);
        setConnectionError('Disconnected from chat server. Attempting to reconnect...');
      });

      // Cleanup
      return () => {
        newSocket.off('connect');
        newSocket.off('connect_error');
        newSocket.off('disconnect');
      };
    }
  }, []);

  const updateName = () => {
    const newRecipientId = sessionStorage.getItem('selectedUser');
    if (newRecipientId && newRecipientId !== recipient_id && isConnected) {
      setRecipient(newRecipientId);
      
      if (sender_id) {
        console.log('Joining chat:', { sender_id, recipient_id: newRecipientId });
        socket.emit('join_chat', { 
          sender_id, 
          recipient_id: newRecipientId 
        });
      }
    }
  };

  useEffect(() => {
    if (isConnected) {
      updateName();
    }
    
    window.addEventListener('storage', (e) => {
      if (e.key === 'selectedUser' && isConnected) {
        updateName();
      }
    });
    
    window.addEventListener('SESSION_STORAGE_UPDATE', updateName);
    
    return () => {
      window.removeEventListener('storage', updateName);
      window.removeEventListener('SESSION_STORAGE_UPDATE', updateName);
    };
  }, [sender_id, isConnected]);

  const sendMessage = () => {
    if (message.trim() !== '' && recipient_id && isConnected && socket) {
      const messageData = {
        sender_id,
        recipient_id,
        message: message.trim(),
        __createdtime__: Date.now()
      };
      
      console.log('Sending message:', messageData);
      socket.emit('send_message', messageData);
      setMessage('');
    }
  };

  useEffect(() => {
    if (socket && isConnected) {
      const handleReceiveMessage = (data) => {
        console.log('Received message:', data);
        if (
          (data.sender_id === sender_id && data.recipient_id === recipient_id) ||
          (data.sender_id === recipient_id && data.recipient_id === sender_id)
        ) {
          setMessagesReceived((state) => [...state, data]);
        }
      };

      socket.on('receive_message', handleReceiveMessage);
      return () => socket.off('receive_message', handleReceiveMessage);
    }
  }, [sender_id, recipient_id, isConnected]);

  useEffect(() => {
    if (socket && isConnected) {
      const handleLastMessages = (messages) => {
        console.log('Received last messages:', messages);
        try {
          const parsedMessages = typeof messages === 'string' 
            ? JSON.parse(messages) 
            : messages;
          
          const sortedMessages = sortMessagesByDate(parsedMessages);
          setMessagesReceived(sortedMessages);
        } catch (error) {
          console.error('Error processing last messages:', error);
        }
      };

      socket.on('last100messages', handleLastMessages);
      return () => socket.off('last100messages', handleLastMessages);
    }
  }, [isConnected]);

  useEffect(() => {
    if (messagesColumnRef.current) {
      messagesColumnRef.current.scrollTop = messagesColumnRef.current.scrollHeight;
    }
  }, [messagesReceived]);

  const sortMessagesByDate = (messages) => {
    return messages.sort(
      (a, b) => parseInt(a.__createdtime__) - parseInt(b.__createdtime__)
    );
  };

  const formatDateFromTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  const getMessageStyle = (msg) => {
    return msg.sender_id === sender_id ? 'sent-message' : 'received-message';
  };

  return (
    <div className='Typing_View_Container'>
      <Profile/>
      {connectionError && (
        <div className="error-message" style={{
          padding: '10px',
          backgroundColor: '#ffebee',
          color: '#c62828',
          textAlign: 'center',
          margin: '10px'
        }}>
          {connectionError}
        </div>
      )}
      <section className="Messages_View" ref={messagesColumnRef}>
      {messagesReceived.map((msg, i) => {
        const isCurrentUser = msg.sender_id == parseInt(sessionStorage.getItem('loggedIn'));
       
        return isCurrentUser ? (
          <div key={i} className="sender">
            <div className="message-bubble">
              <span className="message-text">{msg.message}</span>
              <span className="message-time">
                {formatDateFromTimestamp(msg.__createdtime__)}
              </span>
            </div>
          </div>
        ) : (
          <div key={i} className="recipient">
            <div className="message-bubble">
              <span className="message-text">{msg.message}</span>
              <span className="message-time">
                {formatDateFromTimestamp(msg.__createdtime__)}
              </span>
            </div>
          </div>
        );
      })}
    </section>
      <span className="typing_section">
        <input
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder={isConnected ? "Type a message..." : "Connecting..."}
          disabled={!isConnected}
        />
        <button disabled={!isConnected}><CiLink /></button>
        <button onClick={sendMessage} disabled={!isConnected}>
          <IoIosSend />
        </button>
      </span>
    </div>
  );
};

export default Typing_View;