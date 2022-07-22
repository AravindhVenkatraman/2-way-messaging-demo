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

  const cameraOptions = document.querySelector('.video-options>select');
  const video = document.querySelector('video');
  console.log(navigator);
  const cameraChange = (e) => {
    console.log(e);
    if ('mediaDevices' in navigator && navigator.mediaDevices.getUserMedia) {
      let updatedConstraints = { video: { deviceId: { exact: (e && e.target) ? e.target.value : "" } } }
      if ((e && e.target) && e.target.name === "groupId") {
        updatedConstraints = { video: { groupId: { exact: (e && e.target) ? e.target.value : "" } } }
      }
      console.log(updatedConstraints);
      startStream(updatedConstraints);
    }
  }

  document.getElementById("camera-select").addEventListener("change", cameraChange);

  const getCameraSelection = async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    let videoDevices = devices.filter(device => device.kind === 'videoinput');
    console.log(videoDevices);
    let options = ["<option value='' name=''>Select camera</option>"];
    let optionsArr = videoDevices.map((videoDevice, index) => {
      let label = "Camera-" + index + 1;
      if (videoDevice.label.length !== 0) {
        label = videoDevice.label;
      }
      let value = "";
      let name = ""
      if (videoDevice.deviceId.length > 0) {
        value = videoDevice.deviceId;
        name = "deviceId"
      } else {
        value = videoDevice.groupId;
        name = "groupId"
      }
      return `<option value="${value}" name="${name}">${label}</option>`;
    });
    options = options.concat(optionsArr);
    console.log(options);
    cameraOptions.innerHTML = options.join('');
  };

  const startStream = async (constraints) => {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    console.log(stream);
    handleStream(stream);
  };

  const handleStream = (stream) => {
    video.srcObject = stream;
  };

  getCameraSelection();

  return <>

  </>
}

export default App;