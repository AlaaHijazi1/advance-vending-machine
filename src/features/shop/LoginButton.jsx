import { CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";

function LoginButton() {
  return (
    <Link to="/login">
      <button className="login-button">
        <CiSettings />
      </button>
    </Link>
  );
}

export default LoginButton;
