import AdminProductItem from "./AdminProductItem";
import { ProductsContext } from "../../context/productsContext";
import { useContext } from "react";

function AdminProductSection({ openModal }) {
  const { products } = useContext(ProductsContext);

  return (
    <section className="products">
      <header className="products-header">
        <h2 className="products-title">Products</h2>
        <button
          className="add-product-button"
          onClick={() => {
            openModal(true);
          }}
        >
          Add Product
        </button>
      </header>
      <table className="products-table">
        <tbody>
          {products.map((p) => (
            <AdminProductItem
              key={p.id}
              id={p.id}
              name={p.name}
              price={p.price}
              available={p.available}
              image={p.image}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default AdminProductSection;
