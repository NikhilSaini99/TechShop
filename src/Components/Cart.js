import React, { useState } from 'react'
import { Alert, Box, Button, Divider, Grid, IconButton, Snackbar, Stack, TextField, Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem, increaseQty, decreaseQty, deleteAll } from './State/Features/cartSlice'
import { useNavigate } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Navbar from './Navbar'


const Cart = () => {

  const cartItems = useSelector((state) => state.cart)
  const [snackAlert, setSnackAlert] = useState(false)
  const dispatch = useDispatch()

  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <>
        <Navbar />
        <Typography variant='h2' textAlign="center" mt='5rem'>Empty Cart</Typography>
      </>
    )
  }

  function handleIncreaseQty(Product) {
    if (Product.qty === 10) {
      return
    }
    dispatch(increaseQty(Product.id))
  }

  function handleDecreaseQty(Product) {
    if (Product.qty === 1) {
      dispatch(removeItem(Product.id))
    }
    dispatch(decreaseQty(Product.id))
  }



  const handleSnackAlertClick = () => {
    setSnackAlert(true);
  };

  const handleSnackAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackAlert(false);
  };


  function handleDeleteItem(id) {
    handleSnackAlertClick();
    dispatch(removeItem(id))
  }

  function handleCheckout() {
    dispatch(deleteAll([]));
    navigate('/checkoutpage')
  }

  return (
    <>
      <Navbar />
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={1} mt='5rem'>
        <ShoppingCartCheckoutIcon sx={{ fontSize: '3rem' }} />
        <Typography variant='h2' textAlign="center" sx={{ fontSize: { xs: '2rem' } }}
          gutterBottom={false}>My Cart</Typography>
      </Stack>

      <Box sx={{ display: { xs: 'column', md: 'flex', marginTop: '2rem' }, gap: "2rem" }}>
        <Grid container rowGap={3} sx={{ maxWidth: { xs: '100%', md: '80%' } }}>
          {cartItems.map((item) => (
            <Grid item xs={12} md={12} key={item.id}>
              <Divider sx={{ borderBottomWidth: 2 }} />
              <Stack direction="row" spacing={1}>
                <Box sx={{ maxWidth: { xs: '50%', md: '15%' } }}>
                  <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%' }} />
                </Box>
                <Box sx={{
                  display: { xs: 'column', md: 'flex' }, gap: '0.5rem', justifyContent: "space-between", width: '100%',
                  alignItems: "center"
                }}>
                  <Typography variant='body1' sx={{ width: { md: '50%' } }}>
                    {item.name}
                  </Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <IconButton onClick={() => handleIncreaseQty(item)}>
                      <AddIcon />
                    </IconButton>
                    <TextField value={item.qty} size="small" sx={{ width: '3rem' }}
                      InputProps={{ style: {} }} />
                    <IconButton onClick={() => handleDecreaseQty(item)}
                      sx={{ marginLeft: '3px !important' }}>
                      <RemoveIcon />
                    </IconButton>

                    <IconButton onClick={() => handleDeleteItem(item.id)}>
                      <DeleteForeverIcon />
                    </IconButton>
                    <Snackbar open={snackAlert} autoHideDuration={6000} onClose={handleSnackAlertClose}>
                      <Alert onClose={handleSnackAlertClose} severity="error" sx={{ width: '100%' }}>
                        Item Removed from Cart!
                      </Alert>
                    </Snackbar>
                  </Stack>
                  <Typography variant='body1' sx={{ fontWeight: "bold" }}>
                    &#x20b9; {item.price}
                  </Typography>
                </Box>
              </Stack>
              <Divider sx={{ borderBottomWidth: 2 }} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ width: { md: '20%', display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent:'center' } }}>
          <Typography variant='body1' sx={{ fontWeight: 'bold' }}>{`Subtotal (${cartItems.reduce((totalqty, item) => totalqty + item.qty, 0)} item):`} &#x20b9; {cartItems.reduce((total, item) => total + item.qty * item.price, 0)}
          </Typography>
          <Button variant="contained" size='small'
            sx={{
              backgroundColor: '#F7CA00', color: 'black', mt: '1rem',
              '&:hover': { backgroundColor: '#F7CA00' }
            }}
            onClick={handleCheckout}>Proceed to Checkout</Button>
        </Box>
      </Box>

    </>
  )
}

export default Cart
