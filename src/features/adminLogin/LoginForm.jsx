import Label from "../../component/Label";
import Input from "../../component/Input";
import LoginFormHeader from "./LoginFormHeader";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const fakeAdmin = {
  email: "admin@gmail.com",
  password: "123456",
};

function LoginForm() {
  const navigate = useNavigate();

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputs({ ...inputs, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailIsCorrect = inputs.email === fakeAdmin.email;
    const passwordIsCorrect = inputs.password === fakeAdmin.password;

    setEmailError(!emailIsCorrect);
    setPasswordError(!passwordIsCorrect);

    if (emailIsCorrect && passwordIsCorrect) {
      navigate("/admin");
    }
  };

  return (
    <section className="login-section">
      <LoginFormHeader />
      <form className="login-form" onSubmit={handleSubmit}>
        <Label text="Email" />
        <div>
          <Input type="text" id="email" handleInput={handleChange} />
          <p className={`error-message ${emailError && "show-message-error"}`}>
            Invalid Email !
          </p>
        </div>
        <Label text="Password" />
        <div>
          <Input type="password" id="password" handleInput={handleChange} />
          <p
            className={`error-message ${passwordError && "show-message-error"}`}
          >
            Invalid Password !
          </p>
        </div>
        <footer className="login-footer">
          <button type="submit" className="submit-btn">
            Login
          </button>
        </footer>
      </form>
    </section>
  );
}

export default LoginForm;
