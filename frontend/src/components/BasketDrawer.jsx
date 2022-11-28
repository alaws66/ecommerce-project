import BasketProduct from "./BasketProduct";

const Basket = ({basket}) => {
  return ( 
    <div className='cart-contents'>
      <h1>Basket</h1>
      {basket && 
        basket.map(({ product_id, title, size, colour, price, quantity, discount, image_collection }) => (
          <BasketProduct 
            key={product_id}
            id={product_id}
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
      <div className="confirm-purchase">
        <button className="purchase-btn">Buy now</button>
      </div>
    </div>
   );
}
 
export default Basket;