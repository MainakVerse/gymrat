import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent={{ xs: 'space-between', md: 'flex-start' }} // Mobile: evenly spaced, Desktop: align left
    alignItems="center"
    sx={{
      gap: { xs: '10px', sm: '20px', md: '40px' },
      px: '20px',
      py: { xs: '10px', md: '32px' },
    }}
  >
    {/* Logo */}
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        style={{
          width: '48px',
          height: '48px',
          marginRight: { xs: '10px', md: '20px' }, // Add space to the right of the logo
        }}
      />
    </Link>

    {/* Navigation Links */}
    <Stack
      direction="row"
      gap={{ xs: '10px', sm: '20px', md: '40px' }}
      fontFamily="Roboto"
      fontSize={{ xs: '14px', sm: '18px', md: '24px' }}
      alignItems="center"
      sx={{
        flex: { xs: '1', md: 'unset' }, // Mobile: Allow links to take remaining space
        justifyContent: { xs: 'flex-end', md: 'flex-start' }, // Mobile: Links align right; Desktop: Align left
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          color: '#3A1212',
          borderBottom: { md: '3px solid rgb(72, 27, 176)', xs: '2px solid transparent' },
        }}
      >
        Home
      </Link>
      <a
        href="#exercises"
        style={{
          textDecoration: 'none',
          color: '#3A1212',
        }}
      >
        Exercises
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
