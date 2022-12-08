import { NavLink } from "react-router-dom";

const Home = () => {
  return ( 
    <div className="homepage">
      <div className="main-promotion">
        <div className="message">
          <div className="promo-number">
            <h1>80</h1>
            <h1>%</h1>
          </div>
          <div className="text">
            <h1>of all our products are made from recycled materials</h1>
          </div>
        </div>
      </div>
      
      <div className="divider"></div>

      <div className="homepage-content">
        <NavLink to="/clothing">
          <div className="display-product">
            <h1>Clothing</h1>
            <div className="display-img">
              <img src="../../public/product-images/straight-denim-lightWash-front.jpg"></img>
            </div>
          </div>
        </NavLink>
        <NavLink to="/accessories">
          <div className="display-product">
            <h1>Accessories</h1>
            <div className="display-img">
              <img src="../../public/product-images/bucket-hat-green.jpg"></img>
            </div>
          </div>
        </NavLink>
        
      </div>
    </div>
   );
}
 
export default Home;