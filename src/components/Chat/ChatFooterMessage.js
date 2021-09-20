import React, { useState } from 'react'
import './ChatFooterMessage.css'
import InsertEmoticon from '@material-ui/icons/InsertEmoticon'
import { Mic } from '@material-ui/icons'
import axios from './../../axios'
import { IconButton } from '@material-ui/core';


const ChatFooterMessage = () => {

    const [input, setInput] = useState('')

    const sendMessage = async (e) => {
        e.preventDefault()

        await axios.post('/messages/new', {
            message: input,
            name: "Usuario",
            timestamp: "Just now!",
            received: true,
        });
        setInput('');
    };

    return (
        <>
            <IconButton>
                <InsertEmoticon />
            </IconButton>
            <form>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message"
                    type="text"
                />
                <button onClick={sendMessage} type="submit"> Send a message</button>
            </form>
            <IconButton>
                <Mic />
            </IconButton>
        </>
    )
}

export default ChatFooterMessage
