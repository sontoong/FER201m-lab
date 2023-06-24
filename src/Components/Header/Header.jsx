import React, { useState } from 'react';
import styles from './Header.module.css';
import { Container } from 'react-bootstrap';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import { Brightness7, ModeNight } from '@mui/icons-material';

const Header = ({ isDarkMode, handleDarkModeToggle }) => {
  const PinkSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: pink[600],
      '&:hover': {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: pink[600],
    },
  }));

  const SwitchIcon = () => {
    return isDarkMode ? <ModeNight /> : <Brightness7 />;
  };

  return (
    <Container className={styles.container}>
      <div className={styles.UpperContainer}>
        <img src="asset/img/Logo.png" alt="Logo" />
        <div
          style={{
            fontWeight: 'bold',
            color: 'black',
            fontSize: '2rem',
            backgroundColor: '#d84444',
            padding: '.5rem 3rem .5rem 3rem',
            marginLeft: '-9rem',
            transform: 'rotate(3deg)',
          }}
        >
          Your trusted source of online films
        </div>
        <form method="">
          <input type="text" placeholder="Search Box" />
          <button>Search</button>
        </form>
        <PinkSwitch
          checked={isDarkMode}
          onChange={handleDarkModeToggle}
          checkedIcon={<SwitchIcon />}
          icon={<SwitchIcon />}
        />
      </div>
      <div className={styles.LowerContainer}>
        <a href="#" className={styles.Category}>
          Movie
        </a>
        <a href="#" className={styles.Category}>
          Series
        </a>
        <a href="#" className={styles.Category}>
          TV-Show
        </a>
      </div>
    </Container>
  );
};

export default Header;