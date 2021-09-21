import React from 'react'
import './SidebarHomeChat.css'
import { Avatar } from '@material-ui/core';
import {useHistory} from 'react-router-dom'

const SidebarChat = () => {

    let history = useHistory();

    function handleClick() {
        history.push("/messages");
      }

    return (
        <div className="sidebarChat" onClick={handleClick}>
            <Avatar />
            <div className="sidebarChat_info">
                <h2>Chat Room</h2>
                <p>Last message...</p>
            </div>
        </div>
    )
}

export default SidebarChat
