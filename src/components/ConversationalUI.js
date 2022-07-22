import * as React from "react";
import * as ReactDOM from "react-dom";
import { conversation, user } from "./conversation.js";
import { Chat } from "@progress/kendo-react-conversational-ui";

const AttachmentTemplate = (props) => {
  let attachment = props.item;

  if (attachment.contentType === "hotel") {
    return (
      <a
        href={attachment.site}
        target="_blank"
        draggable={false}
        tabIndex={-1}
        rel="noopener noreferrer"
      >
        <img
          style={{
            width: 150,
          }}
          src={attachment.thumb}
          draggable={false}
        />
      </a>
    );
  } else if (attachment.contentType.match("^image/")) {
    return <img src={attachment.content} draggable={false} />;
  } else if (attachment.contentType === "text/plain") {
    return attachment.content;
  } else {
    return null;
  }
};

export const ConversationalUI = () => {
  const [messages, setMessages] = React.useState(conversation);

  const addNewMessage = (event) => {
    setMessages([...messages, event.message]);
  };

  return (
    <div>
      <Chat
        user={user}
        messages={messages}
        onMessageSend={addNewMessage}
        width={400}
        attachmentTemplate={AttachmentTemplate}
      />
    </div>
  );
};
