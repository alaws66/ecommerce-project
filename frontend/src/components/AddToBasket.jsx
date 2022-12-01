import { useBasketContext } from "../hooks/useBasketContext";

const AddToBasket = ({ size, colour, id, price, discount, item_id }) => {
  const { dispatch } = useBasketContext();

  const addProduct = async () => {
    const product = { size, colour, id, price, discount, item_id };
    console.log(product);

    const response = await fetch(`http://localhost:5000/basket/636a8b38b26aa05d1b9a22b8`, {
      method: 'PATCH',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({type: 'ADD_PRODUCT', payload: json});
    }
  }

  return ( 
    <button className="add-btn" onClick={addProduct}>Add to Basket</button>
   );
}
 
export default AddToBasket;