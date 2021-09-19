import React from 'react'
import './ChatFooterMessage.css'
import InsertEmoticon from '@material-ui/icons/InsertEmoticon'
import { Mic } from '@material-ui/icons'

const ChatFooterMessage = () => {
    return (
        <>
            <InsertEmoticon />
            <form>
                <input
                    placeholder="Type a message"
                    type="text"
                />
                <button type="submit"> Send a message</button>
            </form>
            <Mic />
        </>
    )
}

export default ChatFooterMessage
