import ProductCard from "./ProductCard";
import { ProductsContext } from "../../context/ProductsContext";
import { useContext } from "react";
function ProductsSection() {
  const { products } = useContext(ProductsContext);

  return (
    <section className="products-section">
      <div className="products-grid">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            name={p.name}
            price={p.price}
            available={p.available}
            image={p.image}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductsSection;
