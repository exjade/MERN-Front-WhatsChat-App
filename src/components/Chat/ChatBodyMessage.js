import React from 'react'
import './ChatBodyMessage.css'

const ChatBodyMessage = ({ messages }) => {
    return (
        <>
            {
                messages.map((message, i) => {
                    return (
                        <p className={`chat__message ${message.received && "chat__receiver"}`} key={i}>
                            <span className="chat__name">
                                {message.name}
                            </span>
                            {message.message}
                            <span className="chat__timestamp">
                                {message.timestamp}
                            </span>
                        </p>
                    )
                })
            }
        </>
    )
}

export default ChatBodyMessage
