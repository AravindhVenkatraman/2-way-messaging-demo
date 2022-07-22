// RCE CSS
import "react-chat-elements/dist/main.css";
// MessageBox component
import React from "react";

import { ChatItem } from "react-chat-elements";
import { MessageBox } from "react-chat-elements";
import { MeetingLink } from "react-chat-elements";
import { MessageList } from 'react-chat-elements'
import { Input } from "react-chat-elements";
import { Button } from "react-chat-elements";
import { LocationMessage } from "react-chat-elements";
import { Avatar } from "react-chat-elements";


export const ChatElements = () => {
    const messageListReferance = React.createRef();
    const inputReferance = React.createRef();

    return <>
        <ChatItem
            avatar={"https://facebook.github.io/react/img/logo.svg"}
            alt={"Reactjs"}
            title={"Facebook"}
            subtitle={"What are you doing?"}
            date={new Date()}
            unread={0}
        />

        <MessageBox
            reply={{
                photoURL: "https://facebook.github.io/react/img/logo.svg",
                title: "elit magna",
                titleColor: "#8717ae",
                message: "Aliqua amet incididunt id nostrud",
            }}
            onReplyMessageClick={() => console.log("reply clicked!")}
            position={"left"}
            type={"text"}
            text={
                "Tempor duis do voluptate enim duis velit veniam aute ullamco dolore duis irure."
            }
        />

        {/* <MeetingLink meetingID="1" title="Lorem ipsum dolor sit amet." /> */}


        <MessageList
        	referance={messageListReferance}
        	className='message-list'
        	lockable={true}
        	toBottomHeight={'100%'}
        	dataSource={[
        	    {
        	        position: 'right',
        	        type: 'text',
        	        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        	        date: new Date(),
        	    },
	    ]} />

        <Input
            referance={inputReferance}
            placeholder="Type here..."
            multiline={true}
            rightButtons={<Button color="white" backgroundColor="black" text="Send" />}
        />


        {/* <LocationMessage
            data={{
                latitude: "37.773972",
                longitude: "-122.431297",
                // staticURL: '<optional>',
                // mapURL: '<optional>'
            }}
        /> */}

        <Avatar
            src={"https://facebook.github.io/react/img/logo.svg"}
            alt={"logo"}
            size="large"
            type="circle flexible"
        />


    </>
}