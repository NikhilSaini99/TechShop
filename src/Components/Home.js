import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import background from '../assets/background1.jpg'
import Products from './Products'
import Navbar from './Navbar'
import Footer from './Footer'
import './Home.css'


const Home = () => {
  
    
    return (
        <>
        <Navbar/>
            <Box mt='5rem'>
                <Stack direction='row' spacing={1} sx={{ textAlign: 'center' }}>
                    <Box className='box-animation'
                    sx={{
                        width: { xs: '35%', sm: '40%', md: '50%' },
                        display: 'flex',
                        flexDirection: 'column', justifyContent: 'center'
                    }} >
                        <Typography variant='h1' sx={{
                            fontWeight: 'bold', fontFamily: 'Cinzel',
                            fontSize: { xs: '1.2rem', sm: '2.5rem', md: '4rem' }
                        }}>Welcome To</Typography>
                        <Typography variant='h1' sx={{
                            fontWeight: 'bold', fontFamily: 'Cinzel',
                            fontSize: { xs: '1.2rem', sm: '2.3rem', md: '3.6rem' }
                        }}>Tech Shop</Typography>
                    </Box>

                    <Box sx={{ width: { xs: '65%', sm: '60%', md: '50%' } }}>
                        <img src={background} alt="background_img"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </Box>
                </Stack>

            </Box>

            {/* PRODUCTS */}
            <Products />
            <Footer/>
        </>
    )
}

export default Home
