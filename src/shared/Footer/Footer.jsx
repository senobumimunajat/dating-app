import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function Footer() {
  return (
    <Box sx={{ bgcolor: '#e60965', color: 'white'}}>
        <Grid 
            container 
            height={50} 
            width='90%' 
            mx='auto' 
            justifyContent='center' 
            alignItems='center'
        >
            <Typography variant='p'>&copy; 2022 - Dating App</Typography>
        </Grid>
    </Box>
    
  )
}

export default Footer