import React from 'react';
import Logo from './images/logo.png';

const Header = () => {
  return(
    <>
      <div className='header'>
        <img src={Logo} alt='logo' height='100' width='100' />
        <h1> Keep App </h1> 
      </div>

    </>
  );
}
export default Header;