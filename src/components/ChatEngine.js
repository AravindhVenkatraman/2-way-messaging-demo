import React from 'react';
import { 
  ChatEngine, 
  ChatList, ChatCard, NewChatForm,
  ChatFeed, ChatHeader, IceBreaker, MessageBubble, IsTyping, ConnectionBar, NewMessageForm,
  ChatSettings, ChatSettingsTop, PeopleSettings, PhotosSettings, OptionsSettings
} from 'react-chat-engine'

const ChatEngineIO = () => {
    return (
        <ChatEngine 
          height="100vh"
          // projectID="752ebb48-8f33-4e0d-9069-68579c1bfa6a"
          // userName={localStorage.getItem('username')}
          // userSecret={localStorage.getItem('password')}
          // Customize UI
          renderChatList={(chatAppState) => <ChatList {...chatAppState} />}
          renderChatCard={(chat, index) => <ChatCard key={`${index}`} chat={chat} />}
          renderNewChatForm={(creds) => <NewChatForm creds={creds} />} 
          renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />}
          renderChatHeader={(chat) => <ChatHeader />}
          renderIceBreaker={(chat) => <IceBreaker />}
          renderMessageBubble={(creds, chat, lastMessage, message, nextMessage) => <MessageBubble lastMessage={lastMessage} message={message} nextMessage={nextMessage} chat={chat} />}
          renderIsTyping={(typers) => <IsTyping />}
          renderConnectionBar={(chat) => <ConnectionBar />}
          renderNewMessageForm={(creds, chatID) => <NewMessageForm />}
          renderChatSettings={(chatAppState) => <ChatSettings {...chatAppState} />}
          renderChatSettingsTop={(creds, chat) => <ChatSettingsTop />}
          renderPeopleSettings={(creds, chat) => <PeopleSettings />}
          renderPhotosSettings={(chat) => <PhotosSettings />}
          renderOptionsSettings={(creds, chat) => <OptionsSettings />}
        />
    )
}

export default ChatEngineIO;