import Products from "../components/Products";
import useFetch from "../components/useFetch";

const Accessories = () => {
  const {data: products, isPending, error} = useFetch('/category/accessories');

  return ( 
    <div className="accessories">
      <div className="display-page-title">
        <h1>Accessories</h1>
      </div>

      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {products && <Products products={products.filter((product) => product.category === 'accessory')} />}
    </div>
   );
}
 
export default Accessories;