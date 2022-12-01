import BasketProduct from "../components/BasketProduct";
// import useFetch from "../components/useFetch";
import { useParams } from "react-router-dom";
import { useBasketContext } from "../hooks/useBasketContext";
import { useEffect } from "react";

const Basket = () => {
  const { id } = useParams();
  const { basket, dispatch } = useBasketContext();

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
      totalPrice.push(product.price - (((product.discount / 100) * product.price).toFixed(2)));
    } else {
      totalPrice.push(product.price);
    }
  });

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
      <p className="total-price">Total: &pound;{(totalPrice.reduce((a, b) => a + b, 0)).toFixed(2)}</p>

      <div className="confirm-purchase">
        <button className="purchase-btn">Buy now</button>
      </div>
    </div>
   );
}
 
export default Basket;