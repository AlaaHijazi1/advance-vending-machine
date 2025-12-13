import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://693d8bbef55f1be793032422.mockapi.io/api/products/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
