import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="20px" bgcolor="rgb(170, 140, 241)">
    <Stack sx={{ alignItems: 'center' }} flexWrap="wrap">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '200px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} textAlign="center" pb="5px">Made with ❤️ by Mainak</Typography>
  </Box>
);

export default Footer;