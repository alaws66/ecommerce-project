import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useBasketContext } from "../hooks/useBasketContext";

const BasketProduct = ({ id, item_id, image, title, size, colour, price, discount, quantity }) => {
  const { dispatch } = useBasketContext();

  const adjustQty = async (number) => {
    quantity += number;

    if (quantity < 1) {
      quantity = 1
    }
    
    const product = { quantity };

    const response = await fetch(`http://localhost:5000/basket/636a8b38b26aa05d1b9a22b8/${item_id}?number=${quantity}`, {
      method: 'PATCH',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({type: 'UPDATE_BASKET', payload: json});
    }
  }

  function addDiscount() {
    if (discount) {
      return (
        <p className='discount'>-£{((discount / 100) * price).toFixed(2)}</p>
      );
    }
  }

  if (!image) {
    image = '../../public/product-placeholder.png'
  }

  const handleDelete = async () => {
    const response = await fetch(`http://localhost:5000/basket/636a8b38b26aa05d1b9a22b8/${item_id}`, {
      method: 'DELETE'
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({type: 'DELETE_PRODUCT', payload: { item_id }});
    }
  }

  return ( 
    <div className="basket-product">
      <div className="product-image">
        <FontAwesomeIcon icon={faXmark} className="delete-product" onClick={handleDelete} />
        <Link to={`/products/${ id }`} state={{ colour: colour }}>
          <img src={image}></img>
        </Link>
      </div>
      
      <div className="product-info">
        <p>{title}</p>
        <p>Size: {size}</p>
        <p>Colour: {colour}</p>
        <p>Price: £{price}</p>
        {addDiscount()}
        <div className="adjust-quantity">
          <button><FontAwesomeIcon icon={faPlus} onClick={() => adjustQty(1)} /></button>
          <p>{quantity}</p>
          <button><FontAwesomeIcon icon={faMinus} onClick={() => adjustQty(-1)} /></button>
        </div>
      </div>
    </div>
   );
}
 
export default BasketProduct;