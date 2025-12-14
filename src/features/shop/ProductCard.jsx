import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { showSuccessToast } from "../../utils/toast";
import { showFailToast } from "../../utils/toast";
import { ProductsContext } from "../../context/productsContext";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";

function ProductCard({ id, name, price, available, image }) {
  const { products, setProducts } = useContext(ProductsContext);
  const navigate = useNavigate();

  const [orderStatus, setOrderStatus] = useState("");

  const handlePurchase = () => {
    confirmAlert({
      message: `Do you want to buy ${name}?`,
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              const product = products.find((p) => p.id === id);
              if (!product || product.quantity <= 0) return;

              const updatedProduct = {
                ...product,
                quantity: product.quantity - 1,
                available: product.quantity - 1 > 0,
              };
              await axios.put(
                `https://693d8bbef55f1be793032422.mockapi.io/api/products/products/${id}`,
                updatedProduct
              );
              setProducts(
                products.map((p) => (p.id === id ? updatedProduct : p))
              );
              showSuccessToast("Payment Successful!");
              setOrderStatus("Order is being prepared...");
              setTimeout(() => {
                setOrderStatus("Product delivered!");
              }, 3000);
              setTimeout(() => {
                setOrderStatus("");
              }, 5000);
              setTimeout(() => {
                navigate("/");
              }, 6000);
            } catch (error) {
              console.error(error);
              showFailToast("Payment Failed!");
            }
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  return (
    <article
      onClick={available ? handlePurchase : null}
      className={`product-card ${!available ? "notAvailable" : null}`}
      key={id}
    >
      <div className="product-card-image">
        <img src={image} alt={name} width={150} />
      </div>
      <div className="product-card-info">
        <h2 className="product-card-name">{name}</h2>
        <div className="product-card-details">
          <p className="product-card-price">$ {price}</p>
          <p
            className={
              available ? "product-card-available" : "product-card-notAvailable"
            }
          >
            {orderStatus
              ? orderStatus
              : available
              ? "Available"
              : "Out of Stock"}
          </p>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
