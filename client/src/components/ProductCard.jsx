import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="col-md-4 mb-4">

      <div className="card h-100">

        <img
          src={
            product.image
              ? `http://localhost:5000${product.image}`
              : "https://via.placeholder.com/300"
          }
          className="card-img-top"
          alt={product.name}
        />

        <div className="card-body">

          <h5>{product.name}</h5>

          <p>{product.category}</p>

          <h4 className="text-success">
            ₹ {product.price}
          </h4>

          <Link
            className="btn btn-primary w-100"
            to={`/products/${product._id}`}
          >
            View Details
          </Link>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;