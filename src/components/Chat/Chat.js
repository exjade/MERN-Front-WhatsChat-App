import React from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, SearchOutlined } from '@material-ui/icons'
import MoreVert from '@material-ui/icons/MoreVert'
import ChatMessage from './ChatBodyMessage.js'
import ChatFooterMessage from './ChatFooterMessage.js'

const Chat = ( { messages } ) => {
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
                <div className="chat_headerInfo">
                    <h3>Chat room</h3>
                    <p>Last seen at...</p>
                </div>
                <div
                    className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <ChatMessage messages={messages} />
            </div>
            <div className="chat__footer">
                <ChatFooterMessage />
            </div>
        </div>
    )
}

export default Chat

