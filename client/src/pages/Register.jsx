import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Register() {
  const navigate = useNavigate();

  const { register } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const result = await register(
      formData.name,
      formData.email,
      formData.password
    );

    if (result.success) {
      navigate("/");
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="row justify-content-center">

      <div className="col-md-5">

        <h2 className="mb-4">
          Register
        </h2>

        <form onSubmit={submitHandler}>

          <input
            className="form-control mb-3"
            placeholder="Name"
            name="name"
            onChange={changeHandler}
            required
          />

          <input
            className="form-control mb-3"
            type="email"
            placeholder="Email"
            name="email"
            onChange={changeHandler}
            required
          />

          <input
            className="form-control mb-3"
            type="password"
            placeholder="Password"
            name="password"
            onChange={changeHandler}
            required
          />

          <button className="btn btn-success w-100">
            Register
          </button>

        </form>

        <p className="mt-3">
          Already have an account?
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;