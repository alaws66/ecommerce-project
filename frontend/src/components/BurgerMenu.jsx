import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const BurgerMenu = () => {
  return ( 
    <Menu customCrossIcon={false} customBurgerIcon={<FontAwesomeIcon icon={faBars} />}>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/clothing">
        Clothing
      </a>
      <a className="menu-item" href="/accessories">
        Accessories
      </a>
      <a className="menu-item" href="/account">
        Your Account
      </a>
    </Menu>
   );
}
 
export default BurgerMenu;