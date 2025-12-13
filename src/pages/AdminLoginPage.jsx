import LoginForm from "../features/adminLogin/LoginForm";
import LoginHeader from "../features/adminLogin/LoginHeader";
function AdminLoginPage() {
  return (
    <>
      <LoginHeader />
      <main className="login-wrapper">
        <LoginForm />
      </main>
    </>
  );
}

export default AdminLoginPage;
