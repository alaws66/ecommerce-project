import ProductDetails from "../components/ProductDetails";
import useFetch from "../components/useFetch";
import { useParams, useLocation } from "react-router-dom";
import { BasketsContextProvider } from "../context/BasketContext";

const Product = () => {
  const { id } = useParams();
  const location = useLocation();

  const {data: products, isPending, error} = useFetch(`http://localhost:5000/products/${id}`);
  const { colour } = location.state;

  return ( 
    <div className="product-page">

      {error && <h1>{error}</h1>}
      {isPending && <h1>Loading...</h1>}
      <BasketsContextProvider>
        {products && <ProductDetails products={products} colour={colour} />}
      </BasketsContextProvider>
    </div>
   );
}
 
export default Product;