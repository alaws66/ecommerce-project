import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const BasketProduct = ({ img, title, size, colour, price, discount, quantity }) => {

  function addDiscount() {
    if (discount) {
      return (
        <p className='discount'>-£{discount}</p>
      );
    }
  }

  if (!img) {
    img = '../../public/product-placeholder.png'
  }

  return ( 
    <div className="basket-product">
      <div className="product-image">
        <img src={img}></img>
      </div>
      <div className="product-info">
        <p>{title}</p>
        <p>Size: {size}</p>
        <p>Colour: {colour}</p>
        <p>Price: £{price}</p>
        {addDiscount()}
        <div className="adjust-quanity">
          <button><FontAwesomeIcon icon={faPlus} /></button>
          <p>{quantity}</p>
          <button><FontAwesomeIcon icon={faMinus} /></button>
        </div>
      </div>
    </div>
   );
}
 
export default BasketProduct;