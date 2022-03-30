import React from "react";
import Login from './Login'
import ChatEngineIO from './ChatEngine';
import StreamChatApp from './StreamChatApp';

const App = () => {
  if(!localStorage.getItem('username')) return <Login />
  const logout = (e) => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
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

  } else {
    return(
      <h3>
        Page not found!
      </h3>
    )
  }
}

export default App;