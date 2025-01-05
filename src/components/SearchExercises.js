import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  // const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  // const handleSearch = async () => {
  //   if (search) {
  //     const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

  //     const searchedExercises = exercisesData.filter(
  //       (item) =>
  //         item.name.toLowerCase().includes(search) ||
  //         item.target.toLowerCase().includes(search) ||
  //         item.equipment.toLowerCase().includes(search) ||
  //         item.bodyPart.toLowerCase().includes(search),
  //     );

  //     window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

  //     setSearch('');
  //     setExercises(searchedExercises);
  //   }
  // };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb="49px"
        textAlign="center"
      >
        Awesome Exercises, <br />Curated  For You
      </Typography>
      <Box
        position="relative"
        mb="72px"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'stretch', sm: 'center' },
          gap: { xs: '10px', sm: '0px' },
        }}
      >
        {/* <TextField
          height="76px"
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px',
            },
            width: { lg: '1170px', xs: '100%' },
            backgroundColor: '#fff',
            borderRadius: '40px',
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: 'rgb(72, 27, 176)',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '173px', xs: '100%' },
            height: '56px',
            position: { lg: 'absolute', xs: 'static' },
            right: { lg: '0px', xs: 'unset' },
            fontSize: { lg: '20px', xs: '14px' },
          }}
          onClick={handleSearch}
        >
          Search
        </Button> */}
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
