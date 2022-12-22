const Order = ({orders}) => {
  return ( 
    <div className="review-order">
      {orders.map(({title, size, colour, price, discount, quantity, images}, index) => (
        <div className="selected-product" key={index}>
          <div className="product-image">
              <img src={images[0]}></img>
          </div>
          
          <div className="product-info">
            <p>{title}</p>
            <p>Size: {size}</p>
            <p>Colour: {colour}</p>
            <p>Price: &pound;{price}</p>
            {discount && <p>Discount: {discount}&#37;</p>}
            <p>Quantity: {quantity}</p>
          </div>
        </div>
      ))}
    </div> 
  );
}
 
export default Order;