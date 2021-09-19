import React from 'react'
import './ChatBodyMessage.css'

const ChatBodyMessage = () => {
    return (
        <>
            <p className="chat__message">
                <span className="chat__name">
                     Adrian
                </span>
                Ya hasta trabajo tienes pero aún no lo sabes 😂
                <span className="chat__timestamp">
                    {
                        new Date().toUTCString()
                    }
                </span>
            </p>

            <p className="chat__message chat__receiver">
                <span className="chat__name">
                     Hever David
                </span>
                Gracias muchachossssssssss la verdad muchas gracias, me wa ir a tomar
                <span className="chat__timestamp">
                    {
                        new Date().toUTCString()
                    }
                </span>
            </p>

            <p className="chat__message">
                <span className="chat__name">
                     Dayana Mendoza
                </span>
                Tómese una a nombre mío 😁
                <span className="chat__timestamp">
                    {
                        new Date().toUTCString()
                    }
                </span>
            </p>

            <p className="chat__message">
                <span className="chat__name">
                     Maria del Carmen
                </span>
                Felicitaciones Hever...👏
                <span className="chat__timestamp">
                    {
                        new Date().toUTCString()
                    }
                </span>
            </p>

            <p className="chat__message chat__receiver">
                <span className="chat__name">
                     Hever David
                </span>
                Esooooo 🔥🔥💥💥
                <span className="chat__timestamp">
                    {
                        new Date().toUTCString()
                    }
                </span>
            </p>
        </>
    )
}

export default ChatBodyMessage
