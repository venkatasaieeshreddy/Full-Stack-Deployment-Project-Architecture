import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center mt-5">

      <h1>404</h1>

      <h3>Page Not Found</h3>

      <Link
        className="btn btn-primary mt-3"
        to="/"
      >
        Go Home
      </Link>

    </div>
  );
}

export default NotFound;