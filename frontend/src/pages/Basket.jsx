import Basket from "../components/BasketDrawer";
import useFetch from "../components/useFetch";
import { useParams } from "react-router-dom";

const Cart = () => {
  const { id } = useParams();

  const {data: baskets, isPending, error} = useFetch(`http://localhost:5000/basket/${id}`);

  return ( 
    <div className="cart">
      {error && <h1>{error}</h1>}
      {isPending && <h1>Loading...</h1>}
      <Basket basket={baskets} />
    </div>
   );
}
 
export default Cart;