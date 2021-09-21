import React from 'react'
import './SidebarChat.css'
import { Avatar } from '@material-ui/core';
import {useHistory} from 'react-router-dom'

const SidebarChat = ( { day } ) => {

    let history = useHistory();

    function handleClickm() {
        history.push("/messages");
      }

    return (
        <div className="sidebarChat" onClick={handleClickm}>
            <Avatar />
            <div className="sidebarChat_info">
                <h2>Chat Room</h2>
                <p>Last message...</p>
            </div>
            <div className="sidebar__check">
                    {day}
                </div>
        </div>
    )
}

export default SidebarChat
