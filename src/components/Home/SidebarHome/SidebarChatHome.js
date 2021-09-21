import React from 'react'
import './SidebarChatHome.css'
import { Avatar } from '@material-ui/core';
import {useHistory} from 'react-router-dom'

const SidebarChatHome = ( { day } ) => {

    let history = useHistory();

    function handleClick() {
        history.push("/messages");
      }

    return (
        <div className="sidebarchathome" onClick={handleClick}>
            <Avatar />
            <div className="sidebarchathome_info">
                <h2>Chat Room</h2>
                <p>Last message...</p>
            </div>
            <div className="sidebarchathome__check">
                    {day}
                </div>
        </div>
    )
}

export default SidebarChatHome
