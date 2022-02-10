import { Button, FormControl, Grid, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { authLogin, setUserToLocalStorage } from '../../services/service';

import validationUtils from '../../utils/validationUtils';

function LoginForm({ setValue }) {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationUtils.authValidation,
        onSubmit: (values) => {
            authLogin({
                userName: values.email,
                password: values.password,
            }).then((res) => {
                setUserToLocalStorage(res.data);
                Swal.fire({
                    icon: 'success',
                    title: 'Login Succesfully',
                    text: 'Login Succesfully',
                    confirmButtonColor: '#E60965'
                });
                navigate('/find');
            })
        }
    });

    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant='h5' color='primary'>
                    Log in
                </Typography>
                <Typography variant='p'>
                    Enter your credetial
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
                    Login
                </Button>
                <Typography variant='p'>
                    Don't have any account?
                    <Typography variant='p' color='primary' onClick={() => setValue('1')}> Register </Typography>
                </Typography>
            </Grid>
        </Grid>
    )
}

export default LoginForm;