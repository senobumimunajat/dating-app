import React from 'react'
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import profileDetailImage from "../../assets/svg/profile-detail.svg";
import searchPeopleImage from "../../assets/svg/search-people.svg";
import syncMatchImage from "../../assets/svg/sync-match.svg";

function HowItWorks() {
  return (
    <Grid container width='90%' mx='auto'>
        <Grid item xs={12}>
        <Typography variant='h4' textAlign='center' fontWeight='bold'>How it Works</Typography>
        <Typography variant='h6'textAlign='center' color='primary'>We Always care About Our Users, So We Decided to Make it Simple Just for You!</Typography>
        </Grid>
        <Grid container item my={4}>
          <Grid
            container
            item
            md={4}
            xs={12}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box bgcolor="#ff9691" width={150} height={150} borderRadius="50%">
              <img width="100%" src={profileDetailImage} alt="profile-detail" />
            </Box>
            <Typography mt={3} variant="p" component="p">
              STEP 1
            </Typography>
            <Typography variant="p" component="p">
              Set up your Profile
            </Typography>
          </Grid>
          <Grid
            container
            item
            md={4}
            xs={12}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box bgcolor="#ff9691" width={150} height={150} borderRadius="50%">
              <img width="100%" src={searchPeopleImage} alt="profile-detail" />
            </Box>
            <Typography mt={3} variant="p" component="p">
              STEP 2
            </Typography>
            <Typography variant="p" component="p">
              Find your partners
            </Typography>
          </Grid>

          <Grid
            container
            item
            md={4}
            xs={12}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box bgcolor="#ff9691" width={150} height={150} borderRadius="50%">
              <img width="100%" src={syncMatchImage} alt="profile-detail" />
            </Box>
            <Typography mt={3} variant="p" component="p">
              STEP 3
            </Typography>
            <Typography variant="p" component="p">
              Gotcha
            </Typography>
          </Grid>
        </Grid>

    </Grid>
  );
}

export default HowItWorks;