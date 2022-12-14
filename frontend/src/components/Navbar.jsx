import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Navbar = props => {
  return ( 
    <div className="navbar">
      <div className="left-links">
        <NavLink to="/clothing" className={({ isActive }) => (isActive ? 'active' : 'not-active')}>
          <h1>Clothing</h1>
        </NavLink>
        <NavLink to="/accessories" className={({ isActive }) => (isActive ? 'active' : 'not-active')}>
          <h1>Accessories</h1>
        </NavLink>
      </div>

      <div className="logo">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'not-active')}><h1>Logo</h1></NavLink>
      </div>
      
      <div className="right-links">
        <div className="search">
          <input type='text' id="search" name="search" autoComplete="off" placeholder="Search..."></input>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        </div>

        <div className="icon-links">
          <NavLink to="/account/636a8b38b26aa05d1b9a22b8" className={({ isActive }) => (isActive ? 'active' : 'not-active')}>
            <FontAwesomeIcon icon={faUser} className="user-icon" />
          </NavLink>
          <a>
            <FontAwesomeIcon icon={faCartShopping} className="cart-icon" onClick={props.drawerToggle} />
          </a>
        </div>
      </div>
    </div>
   );
}
 
export default Navbar;