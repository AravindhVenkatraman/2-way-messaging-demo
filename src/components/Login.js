import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [chatComponent, setChatComponent] = useState(0);
    const [error, setError] = useState('');
    const chatComponents = [
        'Chat-Engine',
        'Stream-Chat',
        'React-chat-elements',
        '@chatscope/chat-ui-kit-react'
    ]

    useEffect(() => {
        setUsername('');
        setPassword('');
        setError('');
    }, [chatComponent]);
    async function handleSumbit(e) {
        e.preventDefault();
        const authObj = {
            'project-ID': '752ebb48-8f33-4e0d-9069-68579c1bfa6a',
            'user-Name': username,
            'user-Secret': password
        }

        try {
            if(chatComponent === 0) {
                let result = await axios.get('https://api.chatengine.io/chats', { headers: authObj });
                console.log("axios result :: ", result);
            }
            if(chatComponent === 1) {
                console.log("axios result :: ", chatComponent);
            }
            if(chatComponent === 2) {
                console.log("axios result :: ", chatComponent);
            }
            if(chatComponent === 3) {
                console.log("axios result :: ", chatComponent);
            }
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            localStorage.setItem('component', chatComponent);
            window.location.reload();
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
                        className='component'
                        onClick={(e) => {
                            e.preventDefault();
                            setChatComponent(0);
                        }}
                >
                    rect-chat-engine
                </button>
                <button type='button'
                        className='component'
                        onClick={(e) => {
                            e.preventDefault();
                            setChatComponent(1);
                        }}>stream-chat</button>
                <button type='button'
                        className='component'
                        onClick={(e) => {
                            e.preventDefault();
                            setChatComponent(2);
                        }}
                >
                    react-chat-elements
                </button>
                <button type='button'
                        className='component'
                        onClick={(e) => {
                            e.preventDefault();
                            setChatComponent(3);
                        }}
                >
                    @chatscope/chat-ui-kit-react
                </button>
            </div>
            <div className='loginForm'>
                <form onSubmit={handleSumbit}>
                    <h3 className='formElement'>{chatComponents[chatComponent]} Login</h3>
                    <h5 className='error'>{error}</h5>
                    <div className='formElement'>
                        <input className='input' type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className='formElement'>
                        <input className='input' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='formElement loginButton'>
                        <button className='btn' type='submit'>Log In</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;