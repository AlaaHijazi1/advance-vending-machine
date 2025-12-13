import logo from "../../assets/images/logo-image.png";
import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
function AdminHeader() {
  return (
    <header className="admin-header">
      <div className="back-button">
        <Link to="/login" className="back-link">
          <HiArrowLeft />
        </Link>
      </div>
      <div className="header-info">
        <div className="logo-container">
          <img src={logo} alt="ice cream image-logo" width={60} />
        </div>
        <div className="title-container">
          <h1 className="title">Admin Panel</h1>
          <p className="subtitle">Manage products</p>
        </div>
      </div>
    </header>
  );
}
export default AdminHeader;
