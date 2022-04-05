import React from "react";
import Login from './Login'
import ChatEngineIO from './ChatEngine';
import StreamChatApp from './StreamChatApp';
import { Widget } from 'react-chat-widget';
import { CometChatUI } from '../lib/CometChat';
import { CometChat } from '@cometchat-pro/chat';

import 'react-chat-widget/lib/styles.css';


const App = () => {
  if(!localStorage.getItem('username')) return <Login />
  const logout = (e) => {
    CometChat.logout();
    localStorage.clear();
    window.location.href = "/2-way-messaging-demo";
  }
  let component = JSON.parse(localStorage.getItem('component'));
  console.log(component);
  
  if(component === 0) {
    return <>
        <button className="logoutBtn" onClick={logout}>Logout</button>
        <ChatEngineIO />
      </>
  } else if(component === 1) {
    return <>
        <button className="logoutBtn" onClick={logout}>Logout</button>
        <StreamChatApp />
      </>
  } else if(component === 2) {

  } else if(component === 3) {

  } else if(component === 4) {
    return <>
        <button className="logoutBtn" onClick={logout}>Logout</button>
        <Widget />
      </>
  } else if(component === 5) {
    return <>
        <button className="logoutBtn" onClick={logout}>Logout</button>
        <div style={{height: '95vh'}}>
          <CometChatUI />
        </div>
      </>
  } else {
    return(
      <h3>
        Page not found!
      </h3>
    )
  }
}

export default App;