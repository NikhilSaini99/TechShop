import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { product_details } from '../data'
import '@fontsource/roboto/300.css';



const Products = () => {

  const hoverStyles = {
    transform: 'scale(1.1)',
    transition: 'transform 0.3s ease-in-out',
  };

  return (
    <>
    <Box sx={{
      width: '80%', margin: '0 auto'
    }}>
      <Typography variant='h3' sx={{fontSize:{xs:'1.5rem',sm:'2rem',md:'2.5rem'}}}>All Products</Typography>
      <Grid container columnSpacing={3} rowSpacing={5}>
        {product_details.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={4} xl={3}>
          <Link to={`/product/${item.name}/${item.id}`} state={item}
          style={{color:'black',textDecoration:"none"}}>
            <Stack spacing={2}>
              <Stack sx={{ '&:hover img': hoverStyles }}>
                <img src={item.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  alt={item.name}
                />
              </Stack>
              <Stack direction="column" spacing={1}>
                <Stack>
                  <Typography variant='h6'>
                    {item.name}
                  </Typography>
                </Stack>
                <Stack direction='row'  alignItems="center">
                  <Typography variant='subtitle1' fontWeight="bold">
                    ₹
                  </Typography>
                  <Typography variant='body1'>
                    {item.price}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  )
}

export default Products
