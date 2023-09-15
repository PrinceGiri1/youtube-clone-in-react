import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className='Header'>
      <h1>This is header</h1>
      <MenuIcon />
      <img
        src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg' // Replace with the actual image URL
        alt='Description of the image'
      />
      <input type='text' />
      <SearchIcon/>
    </div>
  );
}

export default Header;
