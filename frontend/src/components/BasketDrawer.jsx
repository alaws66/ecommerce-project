import BasketProduct from "./BasketProduct";

const Basket = () => {
  const products = [
    {
      id: 1,
      img: '../../public/product-images/hoodie-grey-front.jpg',
      title: 'Crew neck jumper',
      size: 16,
      colour: 'Grey',
      price: 16.99,
      quanity: 1
    },
    {
      id: 2,
      img: '../../public/product-images/straight-denim-lightWash-front.jpg',
      title: 'Straight leg demin jean',
      size: 'W30L32',
      colour: 'Light Wash',
      price: 30.00,
      quanity: 1
    },
    {
      id: 3,
      img: '../../public/product-images/cat-sunglasses-pink.jpg',
      title: 'Cat-eye sunglasses',
      size: 'One size',
      colour: 'Pink',
      price: 10.99,
      discount: 6.00,
      quanity: 2
    },
    {
      id: 4,
      img: '../../public/product-images/hoop-earring-gold.jpg',
      title: 'Hoop earrings',
      size: 'One size',
      colour: 'Gold',
      price: 9.99,
      quanity: 1
    }
  ]

  return ( 
    <div className='cart-contents'>
      <h1>Basket</h1>
      {products.map(({ id, img, title, size, colour, price, quanity, discount }) => (
        <BasketProduct 
          key={id}
          img={img}
          title={title}
          size={size}
          colour={colour}
          price={price}
          quanity={quanity}
          discount={discount}
        />
      ))}
      <div className="confirm-purchase">
        <button className="purchase-btn">Buy now</button>
      </div>
    </div>
   );
}
 
export default Basket;