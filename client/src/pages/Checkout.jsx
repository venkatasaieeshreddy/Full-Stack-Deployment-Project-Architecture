import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import API from "../services/api";

function Checkout() {
  const { cart } = useCart();

  const navigate = useNavigate();

  const placeOrder = async () => {
    const totalPrice = cart.reduce(
      (acc, item) =>
        acc + item.product.price * item.quantity,
      0
    );

    const products = cart.map((item) => ({
      product: item.product._id,
      quantity: item.quantity,
    }));

    try {
      await API.post("/orders", {
        products,
        totalPrice,
      });

      alert("Order Placed");

      navigate("/orders");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>

      <h2>Checkout</h2>

      <button
        className="btn btn-success"
        onClick={placeOrder}
      >
        Place Order
      </button>

    </div>
  );
}

export default Checkout;