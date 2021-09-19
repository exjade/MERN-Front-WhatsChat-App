import React, { useState } from 'react'
import './ChatFooterMessage.css'
import InsertEmoticon from '@material-ui/icons/InsertEmoticon'
import { Mic } from '@material-ui/icons'
import axios from './../../axios'

const ChatFooterMessage = () => {

    const [input, setInput] = useState('')

    const sendMessage = async (e) => {
        e.preventDefault()

        await axios.post('/messages/new', {
            message: input,
            name: "User",
            timestamp: "Just now!",
            received: true,
        });
        setInput('');
    };

    return (
        <>
            <InsertEmoticon />
            <form>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message"
                    type="text"
                />
                <button onClick={sendMessage} type="submit"> Send a message</button>
            </form>
            <Mic />
        </>
    )
}

export default ChatFooterMessage
