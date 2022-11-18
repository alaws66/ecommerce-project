import ProductDetails from "../components/ProductDetails";
import useFetch from "../components/useFetch";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const {data: products, isPending, error} = useFetch(`http://localhost:5000/products/${id}`);

  return ( 
    <div className="product-page">

      {error && <h1>{error}</h1>}
      {isPending && <h1>Loading...</h1>}
      {products && <ProductDetails products={products} />}
    </div>
   );
}
 
export default Product;