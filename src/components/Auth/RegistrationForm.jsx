import { Button, FormControl, Grid, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import Swal from 'sweetalert2';
import { authRegister, userActivation } from '../../services/service';
import validationUtils from '../../utils/validationUtils';

function RegistrationForm({ setValue }) {


    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationUtils.authValidation,
        onSubmit: (values) => {
            console.log(values);

            authRegister(values)
                .then((res) => {
                    userActivation(res.data.memberId).then(() => {
                        setValue('2');
                        Swal.fire({
                            icon: 'success',
                            title: 'Registration Succesfully',
                            text: 'Registration Succesfully',
                            confirmButtonColor: '#E60965'
                        });
                    });
                });
        },
    });

    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant='h5' color='primary'>
                    Let's get started
                </Typography>
                <Typography variant='p'>
                    Sign up and find your partner now
                </Typography>
            </Grid>
            <Grid item x={12} component='form' onSubmit={formik.handleSubmit}>
                <FormControl fullWidth sx={{ my: 1 }} margin='dense'>
                    <TextField
                        label='Email'
                        size='small'
                        name='email'
                        id='email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email} />
                </FormControl>
                <FormControl fullWidth>
                    <TextField
                        label='Password'
                        size='small'
                        name='password'
                        id='password'
                        type='password'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        error={formik.touched.password && Boolean(formik.errors.password)} helperText={formik.touched.password && formik.errors.password} />
                </FormControl>
                <Button
                    type='submit'
                    fullWidth sx={{ my: 2 }}
                    variant='contained'>
                    Create New Account
                </Button>
                <Typography variant='p'>
                    Already have an account?
                    <Typography variant='p' color='primary' onClick={() => setValue('2')}> Login </Typography>
                </Typography>
            </Grid>
        </Grid>
    )
}

export default RegistrationForm