import { Box, Button, Grid, Stack, TextField, Typography, IconButton, Snackbar, Alert } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { addItem } from './State/Features/cartSlice';
import Navbar from './Navbar'
import Footer from './Footer';
const min = 1;
const max = 10;

const ProductDetails = () => {
  const dispatch = useDispatch()
  const { state } = useLocation()
  const [value, setValue] = useState(1)
  const [snackAlert, setSnackAlert] = useState(false)


  const handleSnackAlertClick = () => {
    setSnackAlert(true);
  };

  const handleSnackAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackAlert(false);
  };


  function handleAddToCart() {
    handleSnackAlertClick();
    dispatch(addItem({ ...state, qty: value }))
  }

  function handleQTY(e) {
    var value = parseInt(e.target.value)

    if (value > max) {
      value = max;
    }
    if (value < min) {
      value = min;
    }
    setValue(value);
    if (!value) {
      setValue(1)
    }
  }


  function handleIncreaseQty() {

    setValue(value + 1)
    if (value >= 10)
      setValue(10)
  }
  function handleDecreaseQty() {
    setValue(value - 1)
    if (value <= 1)
      setValue(1)
  }


  return (
    <>
      <Navbar />
      <Box  sx={{
       
        maxWidth: { lg: '90%' }, margin: '0 auto',
        p: { xs: '1rem', sm: '1.6rem', md: '3.5rem', lg: '4rem' }
      }}>
        <Grid container columnSpacing={4} mt='5rem'>
          <Grid item xs={12} sm={12} md={6} lg={6} >
            <img src={state.img} alt="testing" style={{
              width: '100%',
              height: '600px', objectFit: 'contain'
            }} />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Stack direction='column' spacing={2}>
              <Typography variant='h3' sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.4rem' } }}>
                {state.name}
              </Typography>
              <Typography variant='h4' sx={{ fontSize: { xs: '1.4rem', sm: '1.8rem', md: '1.8rem' } }}>
                ₹ {state.price}
              </Typography>
              <Typography variant='subtitle1' sx={{ fontSize: { xs: '1rem', letterSpacing: 2 } }}>
                {state.description}
              </Typography>
              <Stack direction='row' spacing={2}>
                <IconButton onClick={handleIncreaseQty}>
                  <AddIcon />
                </IconButton>
                <TextField variant='outlined'
                  size='small'
                  sx={{ maxWidth: '4rem' }}
                  value={value} onChange={handleQTY}
                  inputProps={{ min, max, style: { textAlign: 'center' } }}></TextField>
                <IconButton onClick={handleDecreaseQty} >
                  <RemoveIcon />
                </IconButton>
              </Stack>
              <Stack direction='row' alignItems="center">
                <Button variant='contained'
                  sx={{
                    backgroundColor: '#F7CA00', color: 'black',
                    '&:hover': { backgroundColor: '#F7CA00' }
                  }}
                  onClick={handleAddToCart}>Add to cart</Button>
                <Snackbar open={snackAlert} autoHideDuration={6000} onClose={handleSnackAlertClose}>
                  <Alert onClose={handleSnackAlertClose} severity="success" sx={{ width: '100%' }}>
                    Item added to cart Successfully!
                  </Alert>
                </Snackbar>
              </Stack>

            </Stack>
          </Grid>

        </Grid>

      </Box>
      <Footer />
    </>
  )
}

export default ProductDetails
