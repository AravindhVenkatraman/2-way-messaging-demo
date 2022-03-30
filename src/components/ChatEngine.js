import React from 'react';
import { ChatEngine } from 'react-chat-engine';

const ChatEngineIO = () => {
    return (
        <ChatEngine 
          height="100vh"
          projectID="752ebb48-8f33-4e0d-9069-68579c1bfa6a"
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem('password')}
        />
    )
}

export default ChatEngineIO;