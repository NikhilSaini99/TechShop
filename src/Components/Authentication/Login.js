import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import logo from '../../assets/Logo/TechShop1.png'
import GoogleLoginButton from './GoogleLoginButton'
import {Link} from 'react-router-dom'
const Login = () => {

    return (
        <>
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={1} >
                <Box sx={{ width: '20%', height: '95px', margin: '0 auto' }}>
                    <img src={logo} alt="logo" style={{ width: '100%', height: "100%", objectFit: 'cover' }} />
                </Box>
            </Stack>

            <Box sx={{
                pt: '1rem', maxWidth: { xs: '90%', sm: '70%', md: '60%', lg: '40%', xl: '25%' }, border: '1px solid gray', margin: '0 auto', mt: { xs: '1rem !important', md: '2rem !important' },
                borderRadius: '15px'
            }}>
                <Box sx={{ p: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <Typography variant='h4'>
                        Sign In
                    </Typography>

                    <TextField label="Enter Email address" />
                    <TextField label="Enter Password" />

                    <Button variant='contained' sx={{
                        '&:hover': { backgroundColor: '#F7CA00' },
                        backgroundColor: '#F7CA00', color: 'black',
                        fontWeight: 'bold', textTransform: 'capitalize'
                    }} component={Link} to="/">Log In as Guest</Button>

                    <GoogleLoginButton />

                </Box>
            </Box>
        </>
    )
}

export default Login
