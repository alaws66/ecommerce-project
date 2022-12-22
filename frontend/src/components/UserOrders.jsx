import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const UserOrders = ({orders}) => {
  let [ showPrice ] = useState(0);

  const totalPrice = (products) => {
    const orderTotal = [];

    products.map(({price, discount, quantity}) => {
      if (discount) {
        orderTotal.push((price - ((discount / 100) * price)) * quantity);
      } else {
        orderTotal.push(price * quantity);
      }

      showPrice = orderTotal.reduce((a, b) => a + b, 0).toFixed(2);
    });
  };

  return ( 
    <div>
      <div className="divider"></div>

      <div className="orders">
        {orders.map(({_id, purchase_date, products}) => (
          <NavLink to={`/review-order/${_id}`} key={_id}>
            <div className="order">
              <div>
                <p>Order id: {_id}</p>
                <p>Purchased on: {new Date(purchase_date).toDateString()}</p>
                <p>Total: &pound;{totalPrice(products)}{showPrice}</p>
              </div>
              <div className="order-view-more">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
   );
}
 
export default UserOrders;