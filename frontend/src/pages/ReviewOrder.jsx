import Order from "../components/Order";
import useFetch from "../components/useFetch";
import { useParams } from "react-router-dom";

const ReviewOrder = () => {
  const { id } = useParams();
  const {data: orders, isPending, error} = useFetch(`http://localhost:5000/orders/636a8b38b26aa05d1b9a22b8/${id}`)

  return ( 
    <div>
      <div className="display-page-title">
        <h1>Order Summary</h1>
      </div>
      <div className="divider"></div>

      {error && <h1>{error}</h1>}
      {isPending && <h1>Loading...</h1>}
      {orders && <Order orders={orders.filter((order) => order._id === id)} />}
    </div>
   );
}
 
export default ReviewOrder;