import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import "./ChatScreen.css";


function ChatScreen() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
        name: "Anisul Islam",
        image: "https://scontent.fdac27-2.fna.fbcdn.net/v/t1.6435-9/185941053_1441665546168902_4282767193747384096_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rEYDrA8OJGUAX8LeVDr&_nc_ht=scontent.fdac27-2.fna&oh=00_AT8k0dKRd52aLTpGn6NRQEZ2VTFsJZ3xYmGDgFU1WLgnGw&oe=6349E7D6",
        message: "what's up",
    },
    {
        name: "Anisul Islam",
        image: "https://scontent.fdac27-2.fna.fbcdn.net/v/t1.6435-9/185941053_1441665546168902_4282767193747384096_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rEYDrA8OJGUAX8LeVDr&_nc_ht=scontent.fdac27-2.fna&oh=00_AT8k0dKRd52aLTpGn6NRQEZ2VTFsJZ3xYmGDgFU1WLgnGw&oe=6349E7D6",
        message: "How it's going",
    },
    {
        message: "Well, what about you",
    }
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, {message : input}]);
    setInput("");
  }

  return (
    <div className="chatScreen">
        <p className="chatScreen__timestamp">YOU MATCHED WITH ANISUL ON 10/8/2022</p>
        {messages.map(message => (
            message.name ? (
                <div className="chatScreen__message">
                <Avatar
                className="chatScreen__image"
                alt={message.name}
                src={message.image}
                />
                <p className="chatScreen__text">{message.message}</p>
            </div>
            ) : (
                <div className="chatScreen__message">
                    <p className="chatScreen__textUser">{message.message}</p>
                </div>
            )
        ))}
        <form className="chatScreen__input">
            <input
            value={input}
            onChange={e => setInput(e.target.value)}
            className="chatScreen__inputfield"
            placeholder="Type a message..."
            type="text"
            />
            <button onClick={handleSend} type="submit" className="chatScreen__inputbutton">SEND</button>
        </form>
    </div>
  )
}

export default ChatScreen;