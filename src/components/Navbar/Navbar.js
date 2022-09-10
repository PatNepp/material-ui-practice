import React from 'react'
import { Drawer, Toolbar, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'

import { mainNavbarItems } from './const/navbarItems'
import { navbarStyles } from './styles'

import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <Drawer
            sx={navbarStyles.drawer}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <Divider />
            <List>
            {mainNavbarItems.map((item) => (
                <ListItem 
                    button 
                    key={item.id} 
                    disablePadding
                    onClick={() => navigate(item.route)}
                >
                    <ListItemIcon sx={navbarStyles.icons}>
                    {item.icon}
                    </ListItemIcon>
                    <ListItemText 
                        sx={navbarStyles.text}
                        primary={item.label} 
                    />
                </ListItem>
            ))}
            </List>
        </Drawer>
    )
}

export default Navbar