import React from 'react';
import './SwipeButtons.css';

import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';

function SwipeButtons() {
  return (
    <div className="swipeButtons">
        <IconButton className="swipeButtons__replay">
          <ReplayIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__close">
          <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__star">
          <StarRateIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__favourite">
          <FavoriteIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__flashon">
          <FlashOnIcon fontSize="large" />
        </IconButton>
    </div>
  )
}

export default SwipeButtons