import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { CometChat } from '@cometchat-pro/chat';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [chatComponent, setChatComponent] = useState(0);
    const [error, setError] = useState('');
    const chatComponents = [
        'Chat-Engine',
        'Stream-Chat',
        'React-chat-elements',
        '@chatscope/chat-ui-kit-react',
        'react-chat-widget',
        '@cometchat-pro/chat',
    ]

    useEffect(() => {
        setUsername('');
        setPassword('');
        setError('');
    }, [chatComponent]);
    async function handleSumbit(e) {
        e.preventDefault();
        const chatEngineAuthObj = {
            'project-ID': '752ebb48-8f33-4e0d-9069-68579c1bfa6a',
            'user-Name': username,
            'user-Secret': password
        }
        const cometChatAuthKey = "403bade4b0cd851c4d85262792fe19ef8f586427";

        try {
            if(chatComponent === 0) {
                await axios.get('https://api.chatengine.io/chats', { headers: chatEngineAuthObj });
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
                localStorage.setItem('component', chatComponent);
                window.location.reload();
            } else if(chatComponent === 1) {
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
                localStorage.setItem('component', chatComponent);
                window.location.reload();
            } else if(chatComponent === 2) {
                console.log("axios result :: ", chatComponent);
            } else if(chatComponent === 3) {
                console.log("axios result :: ", chatComponent);
            } else if(chatComponent === 4) {
                console.log("axios result :: ", chatComponent);
            } else if(chatComponent === 5) {
                console.log("debugger");
                CometChat.getLoggedinUser().then(
                    user => {
                        console.log(user);
                        if(!user) {
                            CometChat.login(username, cometChatAuthKey).then(
                                user => {
                                    console.log("Login Successful:", { user });
                                    localStorage.setItem('username', username);
                                    localStorage.setItem('component', chatComponent);
                                    window.location.reload();
                                }, error => {
                                    console.log("Login failed with exception:", { error });
                                    setError(error.message);
                                    throw error;
                                });
                        } else {
                            localStorage.setItem('username', user.name);
                            localStorage.setItem('component', chatComponent);
                            window.location.reload();
                        }
                    }, error => {
                        console.log("Something went wrong", error);
                    });
            }
        } catch (error) {
            localStorage.removeItem('username');
            setError('Invalid Credentials')
            console.log(error);
        }
    }
    return (
        <div>
            <div className='header'>
                <button type='button'
                        style={{backgroundColor : chatComponent === 0 ? '#ffc584' : ''}}
                        className='component'
                        onClick={(e) => {
                            e.preventDefault();
                            setChatComponent(0);
                        }}
                >
                    rect-chat-engine
                </button>
                <button type='button'
                        style={{backgroundColor : chatComponent === 1 ? '#ffc584' : ''}}
                        className='component'
                        onClick={(e) => {
                            e.preventDefault();
                            setChatComponent(1);
                        }}>stream-chat</button>
                <button type='button'
                        disabled
                        style={{backgroundColor : chatComponent === 2 ? '#ffc584' : ''}}
                        className='component'
                        onClick={(e) => {
                            e.preventDefault();
                            setChatComponent(2);
                        }}
                >
                    react-chat-elements
                </button>
                <button type='button'
                        disabled
                        style={{backgroundColor : chatComponent === 3 ? '#ffc584' : ''}}
                        className='component'
                        onClick={(e) => {
                            e.preventDefault();
                            setChatComponent(3);
                        }}
                >
                    @chatscope/chat-ui-kit-react
                </button>
                <button type='button'
                        disabled
                        style={{backgroundColor : chatComponent === 4 ? '#ffc584' : ''}}
                        className='component'
                        onClick={(e) => {
                            e.preventDefault();
                            setChatComponent(4);
                        }}
                >
                    react-chat-widget
                </button>
                <button type='button'
                        style={{backgroundColor : chatComponent === 5 ? '#ffc584' : ''}}
                        className='component'
                        onClick={(e) => {
                            e.preventDefault();
                            setChatComponent(5);
                        }}
                >
                    @cometchat-pro/chat
                </button>
            </div>
            <div className='loginForm'>
                <form onSubmit={handleSumbit}>
                    <h3 className='formElement'>{chatComponents[chatComponent]} Login</h3>
                    <h5 className='error'>{error}</h5>
                    <div className='formElement'>
                        <input className='input' type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    {chatComponent !== 5 && <div className='formElement'>
                        <input className='input' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>}
                    <div className='formElement loginButton'>
                        <button className='btn' type='submit' disabled={username === ''}>Log In</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;