import { Link } from "react-router";

function PageNotFound() {
  return (
    <div className="not-found">
      <div className="not-found-card">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>
          The page you are looking for might have been removed,
          renamed, or is temporarily unavailable.
        </p>

        <Link to="/" className="home-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;