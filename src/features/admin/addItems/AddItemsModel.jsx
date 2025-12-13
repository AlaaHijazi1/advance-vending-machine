import AddItemsForm from "./AddItemsForm";
import { IoCloseOutline } from "react-icons/io5";
function AddItemsModel({ openModal }) {
  
  return (
    <div
      className="overlay"
      onClick={() => {
        openModal(false);
      }}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <header className="modal-header">
          <h3 className="modal-title">Add New Product</h3>
          <button className="modal-close" onClick={() => openModal(false)}>
            <IoCloseOutline />
          </button>
        </header>
        <AddItemsForm openModal={openModal} />
      </div>
    </div>
  );
}

export default AddItemsModel;
