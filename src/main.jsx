import App from "./App.jsx";
import ProductsProvider from "./context/productsContext.jsx";
import "./styles/main.css";
import { createRoot } from "react-dom/client";
createRoot(document.getElementById("root")).render(
  <ProductsProvider>
    <App />
  </ProductsProvider>
);
