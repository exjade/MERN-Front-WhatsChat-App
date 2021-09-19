import React from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, Message, SearchOutlined } from '@material-ui/icons'
import MoreVert from '@material-ui/icons/MoreVert'

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
                <p className="chat__message">
                    
                    <span className="chat__name"> Adrian
                    </span>
                    
                    This is a message

                    <span className="chat__timestamp">
                        {
                        new Date().toUTCString()
                        }
                    </span>

                </p>
            </div>
        </div>
    )
}

export default Chat

