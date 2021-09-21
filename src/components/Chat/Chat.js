import React from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, SearchOutlined, ArrowBack } from '@material-ui/icons'
import MoreVert from '@material-ui/icons/MoreVert'
import ChatMessage from './ChatBodyMessage.js'
import ChatFooterMessage from './ChatFooterMessage.js'
import { useHistory } from 'react-router-dom'

const Chat = ({ messages, date }) => {

    let history = useHistory();

    function handleClick() {
        history.push("/")
    }

    return (
        <div className="chat">
            <div className="chat_header">
                <div className="arrow" onClick={handleClick}>
                    <ArrowBack />
                </div>
                <Avatar />
                <div className="chat_headerInfo">
                    <h3>Chat room</h3>
                    <p>Last seen at {date}</p>
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
            <>
                <ChatFooterMessage />
            </>
        </div>
    )
}

export default Chat

