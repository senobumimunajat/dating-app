import React from 'react'
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

import findBg from '../../assets/svg/missing.svg';
import { useNavigate } from 'react-router';

function FindPartner() {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <Grid container width='90%' minHeight='100vh' mx='auto' alignItems='flex-start'>
                <Grid container item xs={12} my={4} justifyContent='space-between'>
                    <Typography variant='h4'>Partner is Missing</Typography>
                    <Button onClick={() => navigate('/profile-update')} variant='contained'>Update Profile</Button>
                </Grid>
                <Grid container justifyContent='center' item xs={12} mt={3}>
                    <Box sx={{ width: { xs: '100%', md: '80%' } }}>
                        <img width='100%' src={findBg} alt="" />
                    </Box>
                </Grid>
            </Grid >
            <Footer />
        </>
    )
}

export default FindPartner