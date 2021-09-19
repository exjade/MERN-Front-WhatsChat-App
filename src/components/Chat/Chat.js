import React from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, Message, Mic, SearchOutlined } from '@material-ui/icons'
import MoreVert from '@material-ui/icons/MoreVert'
import InsertEmoticon from '@material-ui/icons/InsertEmoticon'

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
                    Ya hasta trabajo tienes pero aún no lo sabes 😂
                    <span className="chat__timestamp">
                        {
                        new Date().toUTCString()
                        }
                    </span>
                </p>

                <p className="chat__message chat__receiver">
                    <span className="chat__name"> Hever David
                    </span>
                    Gracias muchachossssssssss la verdad muchas gracias, me wa ir a tomar
                    <span className="chat__timestamp">
                        {
                        new Date().toUTCString()
                        }
                    </span>
                </p>

                <p className="chat__message">
                    <span className="chat__name"> Dayana Mendoza
                    </span>
                    Tómese una a nombre mío 😁
                    <span className="chat__timestamp">
                        {
                        new Date().toUTCString()
                        }
                    </span>
                </p>

                <p className="chat__message">
                    <span className="chat__name"> Maria del Carmen
                    </span>
                    Felicitaciones Hever...👏
                    <span className="chat__timestamp">
                        {
                        new Date().toUTCString()
                        }
                    </span>
                </p>
                
                <p className="chat__message chat__receiver">
                    <span className="chat__name"> Hever David
                    </span>
                    Esooooo 🔥🔥💥💥
                    <span className="chat__timestamp">
                        {
                        new Date().toUTCString()
                        }
                    </span>
                </p>     
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

