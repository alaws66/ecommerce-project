import BasketProduct from "./BasketProduct";

const Basket = ({basket}) => {
  return ( 
    <div className='cart-contents'>
      <h1>Basket</h1>
      {basket && 
        basket.products.map(({ product_id, size, colour, price, quantity, discount }) => (
          <BasketProduct 
            key={product_id}
            // img={img}
            // title={title}
            size={size}
            colour={colour}
            price={price}
            discount={discount}
            quantity={quantity}
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