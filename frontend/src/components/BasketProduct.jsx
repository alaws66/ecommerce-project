import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const BasketProduct = ({ id, image, title, size, colour, price, discount, quantity }) => {

  function addDiscount() {
    if (discount) {
      return (
        <p className='discount'>-£{discount}</p>
      );
    }
  }

  if (!image) {
    image = '../../public/product-placeholder.png'
  }

  return ( 
    <Link to={`/products/${ id }`} state={{ colour: colour }}>
      <div className="basket-product">
        <div className="product-image">
          <img src={image}></img>
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
    </Link>
   );
}
 
export default BasketProduct;