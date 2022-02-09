import React from 'react'
import bgHomeImage from '../../assets/svg/together-bg.svg';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

function MainHome() {
  return (
    <Grid container width='90%' mx='auto' sx={{mt: {xs: 4, md: 12}}} minHeight='100vh'>
    <Grid item md={4} xs={12}>
      <Typography variant='h3' color='rgba(0,0,0,0.6)' fontWeight='bold'>
        Find your life partner with simple way
      </Typography>
      <Typography variant='h6' color='rgba(0,0,0,0.8)' textAlign='justify' my={4}>
        Simple register on our website and we will find the couple of your dreams. In few simple steps you are joining the Dating website
      </Typography>
      <Button variant='contained'>Sign Up Now</Button>
    </Grid>
    <Grid item md={8} xs={12}>
      <Box>
        <img 
        width='100%' 
        style={{ objectFit: 'contain' }} 
        src={bgHomeImage} 
        alt="bghome" />
      </Box>
    </Grid>
  </Grid>
  )
}

export default MainHome