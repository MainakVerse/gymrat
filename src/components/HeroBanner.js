import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="rgb(72, 27, 176)" fontWeight="600" fontSize="26px">Craving For A Powerful Physique?</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Lift, Sweat, Conquer <br />
      
    </Typography>
    <Typography fontSize="22px" fontFamily="Roboto" lineHeight="35px">
    Discover Heart-Pounding Exercises<br/> Without Stepping Out From Home!
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: 'rgb(72, 27, 176)', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="rgb(72, 27, 176)" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '240px', fontFamily: 'Arial' }}>
      Muscle Up
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;