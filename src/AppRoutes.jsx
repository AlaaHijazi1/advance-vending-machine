import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { FadeLoader } from "react-spinners";

const ShopPage = lazy(() => import("./pages/ShopPage"));
const AdminPage = lazy(() => import("./pages/AdminPage"));
const AdminLoginPage = lazy(() => import("./pages/AdminLoginPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const PaymentStatusPage = lazy(() => import("./pages/PaymentStatusPage"));
const ScanQRPage = lazy(() => import("./pages/ScanQRPage"));

function AppRoutes() {
  return (
    <Suspense
      fallback={
        <div className="spinner">
          <FadeLoader color="#28a899" />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<ScanQRPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/login" element={<AdminLoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/payment-status" element={<PaymentStatusPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
