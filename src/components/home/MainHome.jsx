import React, { useState } from 'react'
import bgHomeImage from '../../assets/svg/together-bg.svg';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { TabContext, TabPanel } from '@mui/lab';
import RegistrationForm from '../Auth/RegistrationForm';
import LoginForm from '../Auth/LoginForm';

function MainHome() {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('1');


  return (
    <Grid container width='90%' mx='auto' sx={{ mt: { xs: 4, md: 12 } }} minHeight='100vh'>
      <Grid item md={4} xs={12}>
        <Typography variant='h3' color='rgba(0,0,0,0.6)' fontWeight='bold'>
          Find your life partner with simple way
        </Typography>
        {!show && (
          <>
            <Typography variant='h6' color='rgba(0,0,0,0.8)' textAlign='justify' my={4}>
              Simple register on our website and we will find the couple of your dreams. In few simple steps you are joining the Dating website
            </Typography>
            <Button onClick={() => setShow(true)} variant='contained'>Sign Up Now</Button>
          </>
        )}
        {
          show &&
          <TabContext value={value}>
            <TabPanel value='1' sx={{ p: 0, mt: 4 }}><RegistrationForm setValue={setValue} /></TabPanel>
            <TabPanel value='2' sx={{ p: 0, mt: 4 }}><LoginForm setValue={setValue} /></TabPanel>
          </TabContext>
        }


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