import React from 'react';
import logo from '../../../images/logo.svg';
import Styles from './Navbar.module.sass';

const Navbar = () => {
  return (
    <header className={Styles.Navbar}>
      <div>
        <img src={logo} alt='logo' />
      </div>
    </header>
  );
};

export default Navbar;
