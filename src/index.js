import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { CometChat } from '@cometchat-pro/chat';

/*const  appID = "206755d635dd6b0c";
const region = "us";
const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
CometChat.init(appID, appSetting).then(
  () => {
    console. log("Initialization completed successfully"); */
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
  /*},
  error => {
    console.log("Initialization failed with error:", error);
  }
); */