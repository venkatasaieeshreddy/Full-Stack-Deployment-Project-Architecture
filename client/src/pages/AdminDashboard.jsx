import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div>

      <h2>Admin Dashboard</h2>

      <Link
        className="btn btn-primary me-3"
        to="/admin/add-product"
      >
        Add Product
      </Link>

      <Link
        className="btn btn-warning"
        to="/products"
      >
        View Products
      </Link>

    </div>
  );
}

export default AdminDashboard;