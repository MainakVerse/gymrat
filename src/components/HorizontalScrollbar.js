import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography
      onClick={() => scrollPrev()}
      className="right-arrow"
      sx={{
        display: { xs: 'none', sm: 'block' }, // Hide arrows on mobile
        cursor: 'pointer',
      }}
    >
      <img src={LeftArrowIcon} alt="left-arrow" style={{ width: '24px', height: '24px' }} />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography
      onClick={() => scrollNext()}
      className="left-arrow"
      sx={{
        display: { xs: 'none', sm: 'block' }, // Hide arrows on mobile
        cursor: 'pointer',
      }}
    >
      <img src={RightArrowIcon} alt="right-arrow" style={{ width: '24px', height: '24px' }} />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu
    LeftArrow={LeftArrow}
    RightArrow={RightArrow}
    sx={{
      overflowX: { xs: 'scroll', sm: 'hidden' }, // Enable scrolling for mobile
      whiteSpace: 'nowrap',
    }}
  >
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        sx={{
          m: { xs: '0 20px', sm: '0 40px' }, // Adjust spacing for mobile
          display: 'inline-block', // Ensure items stay inline
        }}
      >
        {bodyParts ? (
          <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
        ) : (
          <ExerciseCard exercise={item} />
        )}
      </Box>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;
