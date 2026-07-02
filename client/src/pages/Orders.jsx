import { useEffect, useState } from "react";
import API from "../services/api";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loadOrders = async () => {
      const { data } =
        await API.get("/orders/myorders");

      setOrders(data.orders);
    };

    loadOrders();
  }, []);

  return (
    <div>

      <h2 className="mb-4">
        My Orders
      </h2>

      <table className="table table-striped">

        <thead>
          <tr>
            <th>ID</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>

              <td>₹ {order.totalPrice}</td>

              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default Orders;