import React from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, SearchOutlined } from '@material-ui/icons'
import MoreVert from '@material-ui/icons/MoreVert'

const Chat = () => {
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />


                <div className="chat_headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>

                    <div className="chat__headerRight">
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
            </div>
        </div>
    )
}

export default Chat

