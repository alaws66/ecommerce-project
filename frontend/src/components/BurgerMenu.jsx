import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const BurgerMenu = () => {
  return ( 
    <Menu customCrossIcon={false} customBurgerIcon={<FontAwesomeIcon icon={faBars} />}>
      <div className='burger-search'>
        <input type='text' id="search" name="search" autoComplete="off" placeholder="Search..."></input>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="burger-search-icon" />
      </div>

      <a href="/">
        Home
      </a>
      <a href="/clothing">
        Clothing
      </a>
      <a href="/accessories">
        Accessories
      </a>
      <a href="/account">
        Your Account
      </a>
    </Menu>
   );
}
 
export default BurgerMenu;