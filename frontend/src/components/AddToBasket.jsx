import { useBasketsContext } from "../hooks/useBasketsContext";

const AddToBasket = ({ size, colour, id, price, discount }) => {
  const { dispatch } = useBasketsContext();

  const addProduct = async () => {
    const product = { size, colour, id, price, discount };
    console.log(product);

    const response = await fetch(`http://localhost:5000/basket/636b78a1b26aa05d1b9a22ba`, {
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