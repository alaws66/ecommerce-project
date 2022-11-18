import Products from "../components/Products";
import useFetch from "../components/useFetch";

const Clothing = () => {
  const {data: products, isPending, error} = useFetch('http://localhost:5000/category/clothing');

  return ( 
    <div className="clothing">
      <div className="display-page-title">
        <h1>Clothing</h1>
      </div>

      {error && <h1>{error}</h1>}
      {isPending && <h1>Loading...</h1>}
      {products && <Products products={products.filter((product) => product.category === 'clothing')} />}
    </div>
   );
}
 
export default Clothing;