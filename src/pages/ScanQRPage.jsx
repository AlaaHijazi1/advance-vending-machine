import { Link } from "react-router-dom";

function ScanQRPage() {
  return (
    <main className="scan-qr-page">
      <section className="scan-qr-section">
        <h1 className="scan-qr-title">Ice Cream Vending</h1>
        <Link to="/shop">
          <button className="scan-qr-btn">Scan QR</button>
        </Link>
      </section>
    </main>
  );
}

export default ScanQRPage;
