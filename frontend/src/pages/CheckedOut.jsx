import { useNavigate } from "react-router-dom";

const CheckedOut = () => {
  const navigate = useNavigate();

  return ( 
    <div className="checked-out">
      <h1>Your order has been created!</h1>
      
      <button onClick={() => navigate('/')}>Back to Homepage</button>
    </div>
   );
}
 
export default CheckedOut;