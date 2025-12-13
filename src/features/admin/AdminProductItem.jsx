import { ProductsContext } from "../../context/productsContext";
import { HiOutlinePencil } from "react-icons/hi";
import { MdDeleteOutline } from "react-icons/md";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { showSuccessToast } from "../../utils/toast";
import { useContext } from "react";
import axios from "axios";

function AdminProductItem({ id, name, price, available, image }) {
  const { products, setProducts } = useContext(ProductsContext);

  const handleDeleted = (id) => {
    confirmAlert({
      message: "Are you sure you want to delete this product?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            axios
              .delete(
                `https://693d8bbef55f1be793032422.mockapi.io/api/products/products/${id}`
              )
              .then(() => {
                setProducts(products.filter((p) => p.id !== id));
                showSuccessToast("Success Deleted !");
              })
              .catch((error) => console.log("Error", error.message));
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  const handleEdited = () => {
    alert("This feature is not available yet");
  };

  return (
    <tr className="productItem">
      <td className="product-info">
        <div className="product-image">
          <img src={image} alt="product-image" width={30} />
        </div>
        <div className="product-details">
          <h3 className="product-name">{name}</h3>
          <p className="product-status">
            ${price} •
            <span className={available ? "green" : "red"}>
              {available ? "In Stock" : "Out of Stock"}
            </span>
          </p>
        </div>
      </td>
      <td className="product-actions">
        <button className="edit-button" onClick={() => handleEdited(id)}>
          <HiOutlinePencil />
        </button>
        <button className="delete-button" onClick={() => handleDeleted(id)}>
          <MdDeleteOutline />
        </button>
      </td>
    </tr>
  );
}
export default AdminProductItem;
