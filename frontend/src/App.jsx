import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages & components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Clothing from './pages/Clothing';
import Accessories from './pages/Accessories';
import Account from './pages/Account';
import Cart from './pages/Cart';
import BurgerMenu from './components/BurgerMenu';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <BurgerMenu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clothing" element={<Clothing />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/products/:id/*" element={<ProductDetails />} />
            <Route path="/account" element={<Account />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
