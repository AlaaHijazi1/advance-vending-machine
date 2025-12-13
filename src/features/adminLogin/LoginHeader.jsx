import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
function LoginHeader() {
  return (
    <header className="login-header">
      <div className="back-button">
        <Link to="/shop" className="back-link">
          <HiArrowLeft /> <p className="back-text">Back To Store</p>
        </Link>
      </div>
    </header>
  );
}

export default LoginHeader;
