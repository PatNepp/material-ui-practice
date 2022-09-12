import {useState} from 'react'
import { Button, Menu, MenuItem } from '@mui/material'

const BasicMenu = ({anchorEl, handleClose, open}) => {
    return (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
    );
}

export default BasicMenu