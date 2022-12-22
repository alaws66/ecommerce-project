import BasketProduct from "./BasketProduct";
import { useBasketContext } from "../hooks/useBasketContext";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Drawer = props => {
  let drawerClasses = 'drawer';
  const { basket, dispatch } = useBasketContext();
  let [ noBasket ] = useState(true);

  useEffect(() => {
    const fetchBasket = async () => {
      const response = await fetch('http://localhost:5000/basket/636a8b38b26aa05d1b9a22b8');
      const json = await response.json();

      if (response.ok) {
        dispatch({type: 'SET_BASKET', payload: json})
      }
    }

    fetchBasket();
  }, [dispatch]);

  if (props.show) {
    drawerClasses = 'drawer open-drawer';
  }

  basket &&
  basket.map(() => {
    noBasket = false;
  });

  return ( 
      <div className={drawerClasses}>
        <h1>Basket</h1>

        <div className="basket-preview">
          {noBasket ? <p className="empty-basket">Nothing in your basket!</p> : null}
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
        </div>
        
        <NavLink to="/basket/636a8b38b26aa05d1b9a22b8">
          <button className="basket-link" onClick={props.backdrop}>checkout</button>
        </NavLink>
      </div>
   );
}
 
export default Drawer;