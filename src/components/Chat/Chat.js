import React from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, Mic, SearchOutlined } from '@material-ui/icons'
import MoreVert from '@material-ui/icons/MoreVert'
import InsertEmoticon from '@material-ui/icons/InsertEmoticon'
import ChatMessage from './ChatBodyMessage.js'

const Chat = () => {
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
                <div className="chat_headerInfo">
                    <h3>Room name</h3>
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
                <ChatMessage />
            </div>
            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input
                        placeholder="Type a message"
                        type="text"
                    />
                    <button type="submit"> Send a message</button>
                </form>
                <Mic />
            </div>
        </div>
    )
}

export default Chat

