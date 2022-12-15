import { useState } from "react";
import Products from "../components/Products";
import useFetch from "../components/useFetch";

const filtersArr = [];

const Clothing = () => {
  const [filterString, setFilter] = useState('');

  const {data: products, isPending, error} = useFetch(`http://localhost:5000/category/clothing?sections=${filterString}`);
  const {data: sections} = useFetch('http://localhost:5000/category/filter/clothing');

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
    <div className="clothing">
      <div className="display-page-title">
        <h1>Clothing</h1>
      </div>

      {error && <h1>{error}</h1>}
      {isPending && <h1>Loading...</h1>}
      {products && <Products products={products} sections={sections} filterProducts={filterProducts} />}
    </div>
   );
}
 
export default Clothing;