import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useNavigate } from 'react-router-dom';

function Header({ backButton }) {
  const navigate = useNavigate();
  return (
    <div className="header">
      {
        backButton ? (
            <IconButton onClick={() => navigate(backButton)}>
              <ArrowBackIosIcon fontSize="large" className="header__icon" />
            </IconButton>
        ) : (
            <IconButton>
              <PersonIcon className="header__icon" fontSize="large" />
            </IconButton>
        )
      }
      <Link to="/">
        <img className="header__logo" src="https://talentpro.global/wp-content/uploads/2022/05/talentpro-global-logo.jpg" alt="talent-logo" />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;