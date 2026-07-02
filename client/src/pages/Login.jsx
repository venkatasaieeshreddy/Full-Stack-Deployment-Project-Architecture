import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [formData, setFormData] = useState({
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

    const result = await login(
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
          Login
        </h2>

        <form onSubmit={submitHandler}>

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

          <button className="btn btn-primary w-100">
            Login
          </button>

        </form>

        <p className="mt-3">
          New User?
          <Link to="/register">
            Register
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;