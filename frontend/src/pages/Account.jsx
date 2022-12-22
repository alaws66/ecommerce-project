import useFetch from "../components/useFetch";
import UserOrders from "../components/UserOrders";
import { useParams } from "react-router-dom";

const Account = () => {
  const { id } = useParams();
  const {data: orders, isPending, error} = useFetch(`http://localhost:5000/orders/${id}`);

  return ( 
    <div className="profile">
      <div className="display-page-title">
        <h1>Your Account</h1>
      </div>

      {error && <h1>{error}</h1>}
      {isPending && <h1>Loading...</h1>}
      {orders && <UserOrders orders={orders} />}
    </div>
   );
}
 
export default Account;