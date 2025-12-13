import { Link } from "react-router-dom";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";

function PaymentStatusPage() {
  return (
    <main className="payment-status-page">
      <section className="payment-status-section">
        <div className="payment-status-container">
          <FaRegCheckCircle />
        </div>
        <h1 className="payment-status-title">Payment Successful</h1>
        <p className="payment-status-message">
          <Link to="/" className="payment-status-link">
            Return to Home
          </Link>
        </p>
      </section>
    </main>
  );
}

export default PaymentStatusPage;
