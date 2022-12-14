import BasketProduct from "../components/BasketProduct";
// import useFetch from "../components/useFetch";
import { useNavigate, useParams } from "react-router-dom";
import { useBasketContext } from "../hooks/useBasketContext";
import { useEffect, useState } from "react";

const Basket = () => {
  const { id } = useParams();
  const { basket, dispatch } = useBasketContext();
  let [ showTotal ] = useState(0);
  let [ noBasket ] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // const {data, isPending, error} = useFetch(`http://localhost:5000/basket/${id}`);
    const fetchBasket = async () => {
      const response = await fetch(`http://localhost:5000/basket/${id}`);
      const json = await response.json();

      if (response.ok) {
        dispatch({type: 'SET_BASKET', payload: json})
      }
    }

    fetchBasket();
  }, [dispatch]);

  const totalPrice = [];

  basket &&
  basket.map(( product ) => {
    if (product.discount) {
      totalPrice.push(((product.price - ((product.discount / 100) * product.price)) * product.quantity));
    } else {
      totalPrice.push(product.price * product.quantity);
    }

    showTotal = totalPrice.reduce((a, b) => a + b, 0).toFixed(2);

    noBasket = false;
  });

  const buyBasket = async () => {
    const response = await fetch(`http://localhost:5000/orders/checkout/636a8b38b26aa05d1b9a22b8/${basket[0]._id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(basket)
    });

    if (response.ok) {
      dispatch({type: 'CHECKOUT', payload: { id }});
    }

    navigate('/checked-out');
  };
  
  if (noBasket) {
    return (
      <div className="basket">
        <h1 className="empty-basket">Your basket is empty!</h1>
      </div>
    )
  } else {
  return ( 
      <div className="basket">
        {/* {error && <h1>{error}</h1>}
        {isPending && <h1>Loading...</h1>} */}

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
        <p className="total-price">Total: &pound;{showTotal}</p>

        <div className="confirm-purchase">
          <button className="purchase-btn" onClick={buyBasket}>Buy now</button>
        </div>
      </div>
    );
  }
}
 
export default Basket;