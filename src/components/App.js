import React, { useEffect, useState } from "react";


import 'react-chat-widget/lib/styles.css';

import "../components/styles.css"

const App = () => {



  // if(!localStorage.getItem('username')) return <Login />
  // const logout = (e) => {
  //   CometChat.logout();
  //   localStorage.clear();
  //   window.location.href = "/2-way-messaging-demo";
  // }
  // let component = JSON.parse(localStorage.getItem('component'));
  // console.log(component);

  // if(component === 0) {
  //   return <>
  //       <button className="logoutBtn" onClick={logout}>Logout</button>
  //       <ChatEngineIO />
  //     </>
  // } else if(component === 1) {
  //   return <>
  //       <button className="logoutBtn" onClick={logout}>Logout</button>
  //       <StreamChatApp />
  //     </>
  // } else if(component === 2) {
  //   return <>
  //       <button className="logoutBtn" onClick={logout}>Logout</button>
  //       <ChatElements />
  //     </>
  // } else if(component === 3) {
  //   return <>
  //       <button className="logoutBtn" onClick={logout}>Logout</button>
  //       <ChatUIKit />
  //     </>
  // } else if(component === 4) {
  //   return <>
  //       <button className="logoutBtn" onClick={logout}>Logout</button>
  //       <Widget />
  //     </>
  // } else if(component === 5) {
  //   return <>
  //       <button className="logoutBtn" onClick={logout}>Logout</button>
  //       <div style={{height: '95vh'}}>
  //         <CometChatUI />
  //       </div>
  //     </>
  // } else if(component === 6) {
  //   return <>
  //       <button className="logoutBtn" onClick={logout}>Logout</button>
  //       <div style={{height: '95vh'}}>
  //         {/* <ConversationalUI /> */}
  //       </div>
  //     </>
  // } else {
  //   return(
  //     <h3>
  //       Page not found!
  //     </h3>
  //   )
  // }

  // feather.replace();

  const controls = document.querySelector('.controls');
  console.log(controls);
  const cameraOptions = document.querySelector('.video-options>select');
  const video = document.querySelector('video');
  const canvas = document.querySelector('canvas');
  const screenshotImage = document.querySelector('img');
  const buttons = [...controls.querySelectorAll('button')];
  let streamStarted = false;

  const [play, pause, screenshot] = buttons;

  const constraints = {
    video: {
      width: {
        min: 1280,
        ideal: 1920,
        max: 2560,
      },
      height: {
        min: 720,
        ideal: 1080,
        max: 1440
      },
    }
  };

  const getCameraSelection = async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(device => device.kind === 'videoinput');
    const options = videoDevices.map(videoDevice => {
      return `<option value="${videoDevice.deviceId}">${videoDevice.label}</option>`;
    });
    cameraOptions.innerHTML = options.join('');
  };

  play.onclick = () => {
    if (streamStarted) {
      video.play();
      play.classList.add('d-none');
      pause.classList.remove('d-none');
      return;
    }
    if ('mediaDevices' in navigator && navigator.mediaDevices.getUserMedia) {
      const updatedConstraints = {
        ...constraints,
        deviceId: {
          exact: cameraOptions.value
        }
      };
      startStream(updatedConstraints);
    }
  };

  const startStream = async (constraints) => {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleStream(stream);
  };

  const handleStream = (stream) => {
    video.srcObject = stream;
    play.classList.add('d-none');
    pause.classList.remove('d-none');
    screenshot.classList.remove('d-none');
    streamStarted = true;
  };

  getCameraSelection();

  return <>

  </>
}

export default App;