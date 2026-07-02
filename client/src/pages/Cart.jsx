import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce(
    (acc, item) =>
      acc + item.product.price * item.quantity,
    0
  );

  return (
    <div>
      <h2 className="mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <h4>Your cart is empty.</h4>
      ) : (
        <>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {cart.map((item) => (
                <tr key={item.product._id}>
                  <td>{item.product.name}</td>

                  <td>{item.quantity}</td>

                  <td>
                    ₹
                    {item.product.price *
                      item.quantity}
                  </td>

                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        removeFromCart(
                          item.product._id
                        )
                      }
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Total : ₹ {total}</h3>

          <Link
            to="/checkout"
            className="btn btn-success"
          >
            Proceed To Checkout
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;