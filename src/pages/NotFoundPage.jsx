import { Link } from "react-router-dom";
function NotFoundPage() {
  return (
    <main className="notfound-page-container">
      <section className="notfound-page">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">Oops! Page not found</p>
        <p className="notfound-text">
          <Link to="/" className="notfound-link">
            Return to Home
          </Link>
        </p>
      </section>
    </main>
  );
}

export default NotFoundPage;
