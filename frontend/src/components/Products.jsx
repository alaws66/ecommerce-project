import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const Products = ({products, sections, filterProducts, sortProducts}) => {
  const {data: popularProducts} = useFetch('http://localhost:5000/products/popular');

  const isPopular = (productId, colour) => {
    const find = popularProducts.filter(function(result) {
      return result.product_id === productId && result.colour === colour;
    });
    
    return find[0];  
  }

  const dropdownToggle = (clicked, notClicked) => {
    document.querySelector(`.${clicked}-dropdown`).classList.toggle("show");
    document.querySelector(`.${notClicked}-dropdown`).classList.remove("show");
  }

  return ( 
    <div className="browse">
      <div className="divider"></div>

      <div className="products-content">
        <div className="product-nav-btns">
          <div>
            <button onClick={() => dropdownToggle('sort', 'filter')}>Sort By</button>
            <div className="sort-dropdown">
              <button onClick={() => sortProducts('firstTitle')}>A - Z</button>
              <button onClick={() => sortProducts('lastTitle')}>Z - A</button>
              <button onClick={() => sortProducts('min_price')}>Price Low</button>
              <button onClick={() => sortProducts('max_price')}>Price High</button>
            </div>
          </div>          

          <div>
            <button onClick={() => dropdownToggle('filter', 'sort')}>Filter</button>
            <div className="filter-dropdown">
              <div className="dropdown-category">
                <h3>Sections</h3>
                <div className="divider"></div>

                <div className="filters">
                  {sections &&
                  sections.map(({_id, count}) => (
                    <div key={_id}>
                      <label htmlFor={_id}>{_id} &#40;{count}&#41;</label>
                      <input type="checkbox" id={_id} onChange={() => filterProducts(_id)}></input>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
        
        <div className="products">
          {products.map(({ _id, title, colour, min_price, max_price, discount, image }, index) => (
            <div className="product" key={ index }>
              <Link to={`/products/${ _id }`} state={{ colour: colour }}>
                <div className="product-img">
                  <img src={image} alt={ title }></img>
                  {discount && ( 
                    <div className="sale">
                      <p>Sale</p>
                    </div>
                  )}
                  {popularProducts && isPopular(_id, colour) && (
                    <div className="popular">
                      <p>Selling fast!</p>
                    </div>
                  )}
                </div>
                
                <p>{ title }</p>
                <p>{ colour }</p>
                
                {min_price !== max_price && (
                  <p>£{ min_price.toFixed(2) } - £{ max_price.toFixed(2) }</p>
                )}
                {min_price === max_price && (
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