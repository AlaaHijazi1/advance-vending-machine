import { SlLock } from "react-icons/sl";

function LoginFormHeader() {
  return (
    <header className="login-form-header">
      <div className="login-icon">
        <SlLock />
      </div>
      <h1 className="login-title">Admin Login</h1>
      <p className="login-subtitle">Enter Your Credentials To Continue</p>
    </header>
  );
}

export default LoginFormHeader;
