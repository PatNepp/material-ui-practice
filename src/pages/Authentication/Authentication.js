import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import NotificationBell from '../../components/common/NotificationBell/NotificationBell';
import BasicMenu from '../../components/common/BasicMenu/BasicMenu';

const Authentication = () => {
    return (
        <Grid item xs={8}>
            <NotificationBell   
                iconColor="primary"
            />
            <BasicMenu />
        </Grid>
    )
}

export default Authentication