import React from 'react'
import "./SidebarHome.css"
import SidebarChatHome from './SidebarChatHome';
import { Avatar, IconButton } from '@material-ui/core';
import Chat from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVert from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import { useHistory } from 'react-router-dom'

const SidebarHome = ({ day }) => {
    return (
        <div className="sidebarhome">
        <div className="sidebarhome_header">
            <Avatar />
            <div className="sidebarhome_headerRight">
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <Chat />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>
        </div>

        <div className="sidebarhome_search">
            <div className="sidebarhome_searchContainer">
                <SearchOutlined />
                <input placeholder="Search or start new chat" type="text" />
            </div>
        </div>

        <div className="siderbarhome_chats">
            <SidebarChatHome day={day}/>
        </div>
    </div>
    )
}

export default SidebarHome
