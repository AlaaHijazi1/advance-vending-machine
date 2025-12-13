import Label from "../../../component/Label";
import Input from "../../../component/Input";
import UploadImage from "./UploadImage";
import { showSuccessToast } from "../../../utils/toast";
import { ProductsContext } from "../../../context/productsContext";
import { useState, useContext } from "react";
import axios from "axios";

function AddItemsForm({ openModal }) {
  const { products, setProducts } = useContext(ProductsContext);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const [inputs, SetInputs] = useState({
    name: "",
    image: "",
    price: 0,
    quantity: 0,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    SetInputs({ ...inputs, [id]: id == "name" ? value : +value });
  };

  const handleUploadImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("key", import.meta.env.VITE_IMAGE_API_KEY);
    formData.append("image", file);

    try {
      const res = await axios.post("https://api.imgbb.com/1/upload", formData);

      const data = res.data;
      if (data.success) {
        SetInputs({ ...inputs, image: data.data.url });
        setShowErrorMessage(false);
      } else {
        console.log("Upload failed");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleAdd = () => {
    if (inputs.image === "") {
      setShowErrorMessage(true);
      return;
    }

    const newId =
      products.length > 0 ? products[products.length - 1].id + 1 : 1;

    const newProduct = {
      id: newId,
      name: inputs.name,
      image: inputs.image,
      price: inputs.price,
      quantity: inputs.quantity,
      available: true,
    };

    axios
      .post(
        "https://693d8bbef55f1be793032422.mockapi.io/api/products/products",
        newProduct
      )
      .then(() => {
        setProducts([...products, newProduct]);
        showSuccessToast("Added successfully");
      })
      .catch((error) => console.log(error));

    SetInputs({
      name: "",
      image: "",
      price: 0,
      quantity: 0,
    });
    openModal(false);
    setShowErrorMessage(false);
  };

  

  return (
    <form
      className="modal-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleAdd();
      }}
    >
      <div className="upload-container">
        <UploadImage
          handleImage={handleUploadImage}
          imagePreview={inputs.image}
        />
        <p
          className={`upload-warning ${
            showErrorMessage && "show-upload-warning"
          }`}
        >
          Please select image!
        </p>
      </div>

      <Label text="Product Name" />
      <Input type="text" id="name" handleInput={handleChange} />

      <Label text="Price" />
      <Input type="number" id="price" min={1} handleInput={handleChange} />

      <Label text="Quantity" />
      <Input type="number" id="quantity" min={1} handleInput={handleChange} />
      <footer className="modal-footer">
        <button type="submit" className="submit-btn">
          Add Product
        </button>
      </footer>
    </form>
  );
}
export default AddItemsForm;
