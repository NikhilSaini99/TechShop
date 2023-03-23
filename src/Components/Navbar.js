import React, { useEffect, useState } from 'react'
import Logo from '../assets/Logo/TechShop1.png'
import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { setLoginCheck } from '../Components/State/Features/loginSlice'

const Navbar = () => {
    const location = useLocation();
    const [navColor, setNavColor] = useState(false)
    const cartData = useSelector((state) => state.cart);
    const useLoginState = useSelector((state) => state.loginCheck);
    const dispatch = useDispatch()

    if (location.state && location.state.userName) {
        dispatch(setLoginCheck({ status: true, username: location.state.userName }));
    }

    const handleLogout = () => {
        dispatch(setLoginCheck(false))
    }

    function changeNavColor() {
        if (window.scrollY > 75) {
            setNavColor(true)

        }
        else {
            setNavColor(false)
        }

    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavColor);
        return () => {
            window.removeEventListener("scroll", changeNavColor);
        }
    }, [])


    return (
        <>
            <Stack width="100%" sx={{
                zIndex: '999', position: "fixed", 
                flexDirection: { xs: 'row' },
                ...(navColor ?
                    { backgroundColor: '#F7CA00', transition: "background-color 0.5s ease", } : { backgroundColor: 'transparent', transition: "background-color 0.5s ease", }
                ),
                 py: '0.5rem', top: '0', height: '85px',
            }}>

                <Stack sx={{ flexDirection: { xs: 'row' }, width: '100%', py: '1rem',px:'1rem' }}>

                    <Box sx={{ display: 'flex', gap: '1rem', flexGrow: '0.2' }}
                    component={Link} to="/">
                        <img src={Logo} alt="logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>

                    <Box sx={{
                        display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'flex-end', flexGrow: 1,
                        color: 'black'
                    }}>
                        <Button component={Link} to="/" sx={{ color: 'black', fontWeight: 'bold', }}>
                            Home
                        </Button>

                        {useLoginState.loginStatus ?
                            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection:'column'}}>
                                <Typography sx={{ fontWeight: 'bold' }}>{`Hello ${useLoginState.loginUserName}`}</Typography>
                                <Stack direction='row'><Button component={Link} to="/" sx={{ color: 'black' }}
                                    onClick={handleLogout}>Logout</Button>
                                </Stack>
                            </Box>
                            :
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, textAlign: 'center' }}>
                                <Button component={Link} to="/Login" sx={{ fontWeight: 'bold', color: 'black' }}>Login</Button>
                            </Box>
                        }

                        <Box sx={{ display: 'flex', position: 'relative' }}>
                            <IconButton component={Link} to='/cart'>
                                <ShoppingBasketIcon sx={{ color: 'black' }} />
                            </IconButton>
                            <Typography sx={{ position: 'absolute', right: '0', fontWeight: 'bold' }} variant="subtitle2">{cartData.reduce((totalItem, item) => totalItem + item.qty, 0)}</Typography>
                        </Box>

                    </Box>

                </Stack>

            </Stack>
        </>
    )
}

export default Navbar
