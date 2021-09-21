import React from 'react'
import './ChatHome.css'
import connectimg from "./../../assets/connectimg.jpg"
import { Computer } from '@material-ui/icons'


const Chat = () => {

    return (
        <div className="chat_home">
            <div className="chat_imgheader">
                <img src={connectimg} className="chat__imgchat" alt="logo"/>
                <h1 className="chat__text">
                    Mantén tu teléfono conectado
                </h1>
                <div className="chat_p">
                WhatsChat se conecta a tu teléfono para sincronizar los mensajes. Para reducir el consumo de tus datos, conecta tu teléfono a una red Wi-Fi.
                </div>
                <div className="chat_line"></div>
                <div className="chat_footer">
                    <span className="svg_container">
                        <span className="svg_icon">
                            <Computer />
                        </span>
                    </span>
                    <div className="chat_laptoptext">
                    Haz llamadas desde el escritorio con WhatsChat para Windows. 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat

