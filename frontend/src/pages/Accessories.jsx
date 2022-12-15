import { useState } from "react";
import Products from "../components/Products";
import useFetch from "../components/useFetch";

const filtersArr = [];

const Accessories = () => {
  const [filterString, setFilter] = useState('');

  const {data: products, isPending, error} = useFetch(`http://localhost:5000/category/accessory?sections=${filterString}`);
  const {data: sections} = useFetch('http://localhost:5000/category/filter/accessory');

  const filterProducts = (filter) => {
    if (!filtersArr.includes(filter)) {
      filtersArr.push(filter);
    } else {
      const index = filtersArr.indexOf(filter);
      filtersArr.splice(index, 1);
    }
    
    setFilter(filtersArr.toString());
  }

  return ( 
    <div className="accessories">
      <div className="display-page-title">
        <h1>Accessories</h1>
      </div>

      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {products && <Products products={products} sections={sections}  filterProducts={filterProducts} />}
    </div>
   );
}
 
export default Accessories;