import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import API from "../services/api";
import Loader from "../components/Loader";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await API.get(
          `/products/${id}`
        );

        setProduct(data.product);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <Loader />;

  if (!product)
    return <h3>Product Not Found</h3>;

  return (
    <div className="row">

      <div className="col-md-6">

        <img
          src={`http://localhost:5000${product.image}`}
          alt={product.name}
          className="img-fluid"
        />

      </div>

      <div className="col-md-6">

        <h2>{product.name}</h2>

        <p>{product.description}</p>

        <h3 className="text-success">
          ₹ {product.price}
        </h3>

        <button
          className="btn btn-primary"
          onClick={() =>
            addToCart(product._id)
          }
        >
          Add To Cart
        </button>

      </div>

    </div>
  );
}

export default ProductDetails;