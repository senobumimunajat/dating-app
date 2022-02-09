import React from 'react'
import { Grid, Typography } from '@mui/material';

function HowItWorks() {
  return (
    <Grid container width='90%' mx='auto'>
        <Grid item xs={12}>
        <Typography variant='h4' textAlign='center' fontWeight='bold'>How it Works</Typography>
        <Typography variant='h6'textAlign='center' color='primary'>We Always care About Our Users, So We Decided to Make it Simple Just for You!</Typography>
        </Grid>
        <Grid item md={4} xs={12}></Grid>
        <Grid item md={4} xs={12}></Grid>
        <Grid item md={4} xs={12}></Grid>
    </Grid>
  );
}

export default HowItWorks;