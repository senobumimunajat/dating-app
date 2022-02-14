import styled from '@emotion/styled'
import { DesktopDatePicker, LocalizationProvider } from '@mui/lab'
import { Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Footer from '../../shared/Footer/Footer'
import Header from '../../shared/Header/Header'
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { useFormik } from 'formik'
import { format } from 'date-fns';
import { updateProfile, getUserFromLocalStorage, uploadAvatar } from '../../services/service'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router'


const Input = styled('input')({
    display: 'none',
})

function UpdateProfileForm() {

    const [image, setImage] = useState({
        currentImage: null,
        previewImage: null,
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            memberId: '',
            name: '',
            mobilePhone: '',
            dob: null,
            address: '',
            city: '',
            gender: 'M',
            bio: '',
            instagram: '',
            twitter: ''
        },
        onSubmit: (values) => {
            const user = {
                ...values,
                memberId: getUserFromLocalStorage().memberId,
                bod: format(values.dob, "yyyy-MM-dd"),
                selfDescription: values.bio,
            }
            updateProfile(user)
                .then(() => {
                    uploadAvatar(user.memberId, image.currentImage).then((res) => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Registration Succesfully',
                            text: 'Registration Succesfully',
                            confirmButtonColor: '#E60965'
                        }).then(() => navigate('/profile-preference'));
                    }).catch((err) => {
                        Swal.fire({
                            icon: 'error',
                            title: `Error ${err.response.data.HttpCode}`,
                            text: err.response.data.ErrorDescription.message,
                            confirmButtonColor: '#E60965'
                        });
                    });
                }).catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: `Error ${err.response.data.HttpCode}`,
                        text: err.response.data.ErrorDescription.message,
                        confirmButtonColor: '#E60965'
                    });
                })
        },
    });

    const handleImageChange = (e) => {
        if (e.target.files[0] <= 0) return;
        const fileSize = e.target.files[0].size;
        const file = Math.round(fileSize / 1024);

        if (file >= 1024) {
            setError("Image size should be less than 1MB");
            return;
        } else {
            setImage({
                currentImage: e.target.files[0],
                previewImage: URL.createObjectURL(e.target.files[0]),
            });
        }
    };


    return (
        <>
            <Header />
            <Grid container width='90%' minHeight='100vh' mx='auto' alignContent='flex-start'>
                <Grid item xs={12} my={2}>
                    <Typography variant='h4' textAlign='center'>Update Profile</Typography>
                </Grid>
                <Grid container item component='form' spacing={3} my={4} onSubmit={formik.handleSubmit}>
                    <Grid container item md={4} xs={12} direction='column' alignItems='center'>
                        {image.previewImage ? (
                            <img src={image.previewImage} alt='preview' width='300' height='300' style={{ borderRadius: '50%', objectFit: 'cover' }} />
                        ) : (
                            <img width='300' height='300' style={{ borderRadius: '50%', objectFit: 'cover' }} src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="avatar" />
                        )}
                        <label htmlFor='avatar' style={{ marginTop: '1em' }}>
                            <Input accept='image/*' id='avatar' type='file'
                                onChange={handleImageChange} />
                            <Button variant='contained' component='span'>
                                Upload Avatar
                            </Button>
                        </label>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Typography variant='h6' color='primary'>
                            Personal Information
                        </Typography>
                        <FormControl margin='dense' fullWidth>
                            <TextField label='Name' id='name' name='name' size='small' onChange={formik.handleChange} value={formik.values.name} />
                        </FormControl>
                        <FormControl margin='dense' fullWidth>
                            <TextField label='Mobile Phone' id='mobilePhone' name='mobilePhone' size='small' onChange={formik.handleChange} value={formik.values.mobilePhone} />
                        </FormControl>
                        <FormControl margin='dense' fullWidth>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DesktopDatePicker
                                    label='Birthdate'
                                    disableFuture
                                    value={formik.values.dob}
                                    onChange={(date) => formik.setFieldValue('dob', date)}
                                    renderInput={(params) => (<TextField {...params} size='small' />)}
                                />
                            </LocalizationProvider>
                        </FormControl>
                        <FormControl margin='dense' fullWidth>
                            <TextField
                                label='Address'
                                id='address'
                                name='address'
                                size='small'
                                multiline
                                minRows={4}
                                maxRows={4}
                                onChange={formik.handleChange} value={formik.values.address} />

                        </FormControl>
                        <FormControl margin='dense' fullWidth>
                            <TextField
                                label='City'
                                id='city'
                                name='city'
                                size='small'
                                onChange={formik.handleChange} value={formik.values.city} />

                        </FormControl>
                        <FormControl margin='dense' fullWidth>
                            <FormLabel id='gender-group'>Gender</FormLabel>
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
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Typography variant='h6' color='primary'>
                            About Me
                        </Typography>
                        <FormControl margin='dense' fullWidth>
                            <TextField
                                label='Bio'
                                id='bio'
                                name='bio'
                                size='small'
                                multiline
                                minRows={4}
                                maxRows={4}
                                onChange={formik.handleChange} value={formik.values.bio} />
                        </FormControl>
                        <FormControl margin='dense' fullWidth>
                            <TextField
                                label='Instagram'
                                id='instagram'
                                name='instagram'
                                size='small'
                                onChange={formik.handleChange} value={formik.values.instagram} />
                        </FormControl>
                        <FormControl margin='dense' fullWidth>
                            <TextField
                                label='Twitter'
                                id='twitter'
                                name='twitter'
                                size='small'
                                onChange={formik.handleChange} value={formik.values.twitter} />
                        </FormControl>
                        <Button variant='outlined' size='large' type='submit' fullWidth sx={{ mt: 1 }}>Submit</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Footer />
        </>
    )
}

export default UpdateProfileForm