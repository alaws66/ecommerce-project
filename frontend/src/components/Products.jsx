import { Link } from "react-router-dom";

const Products = ({products}) => {
  return ( 
    <div className="browse">
      <div className="divider"></div>

      <div className="products-content">
        <div className="product-nav-btns">
          <button>Sort By</button>
          <button>Filter</button>
        </div>
        
        <div className="products">
          {products.map(({ _id, title, colour, min_price, max_price, discount, image }, index) => (
            <div className="product" key={ index }>
              <Link to={`/products/${ _id }`}>
                <div className="product-img">
                  <img src={image} alt={ title }></img>
                  {discount && ( 
                    <div className="sale">
                    <p>Sale</p>
                  </div>
                   )}
                </div>
                
                <p>{ title }</p>
                <p>{ colour }</p>
                
                {min_price && (
                  <p>£{ min_price.toFixed(2) } - £{ max_price.toFixed(2) }</p>
                )}
                { !min_price && (
                  <p>£{max_price.toFixed(2)}</p>
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
   );
}
 
export default Products;