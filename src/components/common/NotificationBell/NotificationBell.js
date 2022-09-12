import React, { useState } from 'react'
import { Badge, IconButton, Tooltip } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';
import BasicMenu from '../BasicMenu/BasicMenu';

const NotificationBell = ({iconColor, badgeContent}) => {
    const newNotifications = `You have ${badgeContent} new messages!`
    const noNotifications = 'YOU HAVE NOTHING!'
    const [anchorEl, setAnchorEl] = useState(null)
    const [open, setOpen] = useState(false)

    const handleOpen = (e) => {
        setAnchorEl(e.currentTarget)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

  return (
    <>
        <Tooltip title={!badgeContent ? noNotifications : newNotifications}>
        <IconButton 
            color={iconColor}
            onClick={badgeContent && handleOpen}
            anchorEl={anchorEl}    
        >
            <Badge badgeContent={badgeContent} color="error" >
                <NotificationsIcon/>
            </Badge>
        </IconButton>
        </Tooltip>
        <BasicMenu open={open} anchorEl={anchorEl} handleClose={handleClose} />
    </>    
  )
}

export default NotificationBell