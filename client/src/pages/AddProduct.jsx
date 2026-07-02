import { useState } from "react";
import API from "../services/api";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    stock: "",
    image: "",
  });

  const changeHandler = (e) => {
    setProduct({
      ...product,
      [e.target.name]:
        e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    await API.post("/products", product);

    alert("Product Added");
  };

  return (
    <div className="col-md-6">

      <h2>Add Product</h2>

      <form onSubmit={submitHandler}>

        <input
          className="form-control mb-3"
          name="name"
          placeholder="Name"
          onChange={changeHandler}
        />

        <input
          className="form-control mb-3"
          name="category"
          placeholder="Category"
          onChange={changeHandler}
        />

        <input
          className="form-control mb-3"
          name="price"
          placeholder="Price"
          onChange={changeHandler}
        />

        <input
          className="form-control mb-3"
          name="stock"
          placeholder="Stock"
          onChange={changeHandler}
        />

        <input
          className="form-control mb-3"
          name="image"
          placeholder="Image URL"
          onChange={changeHandler}
        />

        <textarea
          className="form-control mb-3"
          name="description"
          placeholder="Description"
          onChange={changeHandler}
        />

        <button className="btn btn-success">
          Add Product
        </button>

      </form>

    </div>
  );
}

export default AddProduct;