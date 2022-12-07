import { BrowserRouter, Routes, Route, renderMatches } from 'react-router-dom';
import { Component } from 'react';

// pages & components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Clothing from './pages/Clothing';
import Accessories from './pages/Accessories';
import Account from './pages/Account';
import Basket from './pages/Basket';
import BurgerMenu from './components/BurgerMenu';
import Product from './pages/Product';
import Drawer from './components/BasketDrawer';
import Backdrop from './components/Backdrop';
import CheckedOut from './pages/CheckedOut';


class App extends Component {
  state = {
    sideDrawerOpen: false
  }

  drawerToggle = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }

    return (
      <div className="App">
        <BrowserRouter>
          <Navbar drawerToggle={this.drawerToggle} />
          <BurgerMenu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
          <Drawer show={this.state.sideDrawerOpen} backdrop={this.backdropClickHandler} />
          {backdrop}
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/clothing" element={<Clothing />} />
              <Route path="/accessories" element={<Accessories />} />
              <Route path="/products/:id/*" element={<Product />} />
              <Route path="/account" element={<Account />} />
              <Route path="/basket/:id" element={<Basket />} />
              <Route path='/checked-out' element={<CheckedOut />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
