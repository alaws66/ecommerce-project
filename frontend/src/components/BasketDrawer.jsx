import BasketProduct from "./BasketProduct";
import { useBasketContext } from "../hooks/useBasketContext";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Drawer = props => {
  // let [drawerClasses, setDrawerClasses] = useState('drawer');
  let drawerClasses = 'drawer';
  const { basket } = useBasketContext();

  if (props.show) {
    drawerClasses = 'drawer open-drawer';
  }

  const goCheckout = () => {
    drawerClasses = 'drawer';
  }

  return ( 
      <div className={drawerClasses}>
        <h1>Basket</h1>

        {basket && 
          basket.map(({ product_id, item_id, title, size, colour, price, quantity, discount, image_collection }) => (
            <BasketProduct 
              key={item_id}
              id={product_id}
              item_id={item_id}
              title={title}
              size={size}
              colour={colour}
              price={price}
              discount={discount}
              quantity={quantity}
              image={image_collection.images[0]}
            />
          ))
        }
        <NavLink to="/basket/636a8b38b26aa05d1b9a22b8">
          <button className="basket-link" onClick={goCheckout}>checkout</button>
        </NavLink>
      </div>
   );
}
 
export default Drawer;