import React from 'react';
import { Notifications } from '@mui/icons-material';
import { AppBar, Avatar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';

function Header() {
  return (
    <AppBar position='static'>
      <Toolbar sx={{width: '90%', mx: 'auto'}}>
          <Grid container item md={8}>
              <Typography variant='h5'>Dating App</Typography>
          </Grid>
          <Grid container item md={4} justifyContent='flex-end'>
              <IconButton color='inherit'>
                  <Notifications />
              </IconButton>
              <Box>
                  <IconButton color='inherit'>
                      <Avatar src='https://picsum.photos/200/300'
                      alt='user avatar' />
                  </IconButton>
              </Box>
          </Grid>
      </Toolbar>
  </AppBar>
  );
}

export default Header