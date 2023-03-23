import { Button, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const Checkoutpage = () => {
  return (
    <Stack direction="column" spacing={2} alignItems="center">
    <Typography variant='h2' sx={{width:"100%",textAlign:"center",color:'purple'}}>Thank You for Shopping!!</Typography>
    <Button component={Link} to="/" variant='contained' size='small' sx={{backgroundColor:'#F7CA00',color:'black',fontWeight:'bold','&:hover':{backgroundColor:'#F7CA00'}}}>Go Back</Button>
    </Stack>
  )
}

export default Checkoutpage
