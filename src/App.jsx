import AppRoutes from "./AppRoutes";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { HashRouter } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollAndToastHandler = () => {
  const location = useLocation();

  useEffect(() => {
    toast.dismiss();
  }, [location]);

  return null;
};

function App() {
  return (
    <HashRouter>
      <ScrollAndToastHandler />
      <AppRoutes />
      <ToastContainer />
    </HashRouter>
  );
}

export default App;
