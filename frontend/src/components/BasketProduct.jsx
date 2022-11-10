import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const BasketProduct = ({ title, size, colour, price, quanity }) => {
  return ( 
    <div className="basket-product">
      <div className="product-image">
        <img src='../../public/product-placeholder.png'></img>
      </div>
      <div className="product-info">
        <p>{title}</p>
        <p>Size: {size}</p>
        <p>Colour: {colour}</p>
        <p>Price: £{price}</p>
        <div className="adjust-quanity">
          <button><FontAwesomeIcon icon={faPlus} /></button>
          <p>{quanity}</p>
          <button><FontAwesomeIcon icon={faMinus} /></button>
        </div>
      </div>
    </div>
   );
}
 
export default BasketProduct;