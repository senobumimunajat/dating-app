import React, { useEffect, useState } from 'react'
import Footer from '../../shared/Footer/Footer'
import Header from '../../shared/Header/Header'
import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography, Checkbox } from '@mui/material'
import { Box } from '@mui/system'
import imageInterest from '../../assets/image/image-interest-form.jpg'
import { useFormik } from 'formik'
import { getInterestData } from '../../services/service'

function ProfilePreferenceForm() {
    const [listInterest, setListInterest] = useState([]);

    const formik = useFormik({
        initialValues: {
            memberId: '',
            genderInterest: 'M',
            domicileInterest: '',
            startAgeInterest: '',
            endAgeInterest: '',
            interests: [],
        },
        onSubmit: (values) => {
            console.log(values);
        }
    });

    const handleInterest = (e) => { };

    useEffect(() => {
        getInterestData().then((res) => {
            setListInterest([...res.data])
        });
    });

    return (
        <>
            <Header />
            <Grid container width='90%' minHeight='100vh' alignItems='center' mx='auto'>
                <Grid item md={8} sx={{ display: { sx: 'none', md: 'flex' } }}>
                    <Box>
                        <img width='100%' src={imageInterest} alt="profile-preference" />
                    </Box>
                </Grid>
                <Grid item md={4} xs={12} component='form' onSubmit={formik.handleSubmit}>
                    <Typography variant='h5' textAlign='center' color='primary'>
                        My Preference
                    </Typography>
                    <FormControl margin='dense' fullWidth>
                        <FormLabel id='gender-group'>Interest to?</FormLabel>
                        <RadioGroup
                            row
                            name='gender'
                            id='gender'
                            onChange={formik.handleChange}
                            value={formik.values.gender} >
                            <FormControlLabel value='M' label='Male' control={<Radio size='small' />} />
                            <FormControlLabel value='F' label='Female' control={<Radio size='small' />} />
                        </RadioGroup>
                    </FormControl>
                    <FormControl margin='dense' fullWidth>
                        <TextField
                            label='Domicile Interest'
                            name='domicileInterest'
                            id='domicileInterest'
                            onChange={formik.handleChange}
                            value={formik.values.domicileInterest}
                        />
                    </FormControl>
                    <Grid container spacing={2}>
                        <Grid item md={6} xs={12}>
                            <FormControl margin='dense' fullWidth>
                                <TextField
                                    label='Start Age Interest'
                                    size='small'
                                    name='startAgeInterest'
                                    id='startAgeInterest'
                                    type='number'
                                    onChange={formik.handleChange}
                                    value={formik.values.startAgeInterest}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <FormControl margin='dense' fullWidth>
                                <TextField
                                    label='End Age Interest'
                                    size='small'
                                    name='endAgeInterest'
                                    id='endAgeInterest'
                                    type='number'
                                    onChange={formik.handleChange}
                                    value={formik.values.endAgeInterest}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid item>
                        {listInterest.map((item) => {
                            return (
                                <FormControlLabel
                                    key={item.InterestId}
                                    label={item.Interest}
                                    control={
                                        <Checkbox
                                            key={item.InterestId}
                                            onChange={handleInterest}
                                            id={item.InterestId}
                                            name={item.Interest}
                                        />
                                    }
                                />
                            );
                        })}
                    </Grid>
                </Grid>
            </Grid>
            <Footer />
        </>
    )
}

export default ProfilePreferenceForm