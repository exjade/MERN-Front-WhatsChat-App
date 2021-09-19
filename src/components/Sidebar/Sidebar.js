import React from 'react'
import "./Sidebar.css"
import SidebarChat from './SidebarChat';
import { Avatar, IconButton } from '@material-ui/core';
import Chat from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVert from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src='' />
                <div className="sidebar_headerRight">
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

            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text"/>
                </div>
            </div>
            <div className="siderbar_chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar
