import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/index.css';

const chatClient = StreamChat.getInstance('ajsqerfrf2rc');
const user = {
  id: 'Aravindh',
  name: 'Aravindh',
  image: 'https://getstream.io/random_png/?id=bitter-pond-3&name=bitter-pond-3',
}
chatClient.connectUser(
  user,
  chatClient.devToken(user.id)
);

const channel = chatClient.channel('messaging', 'custom_channel_id', {
  // add as many custom fields as you'd like
  image: 'https://www.drupal.org/files/project-images/react.png',
  name: 'Talk about React',
  members: ['rough-shadow-6'],
});

const StreamChatApp = () => (
  <Chat client={chatClient} theme='messaging light'>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default StreamChatApp;