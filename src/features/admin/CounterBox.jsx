import { ProductsContext } from "../../context/productsContext";
import { useContext } from "react";

function CounterBox({ title }) {
  const { products } = useContext(ProductsContext);

  const handleQuantity = () => {
    if (title === "Out of Stock") {
      return products.filter((p) => !p.available).length;
    } else if (title === "Available") {
      return products.filter((p) => p.available).length;
    } else {
      return products.length;
    }
  };

  return (
    <article className="counterBox">
      <h2 className="counterBox-title">{title}</h2>
      <p
        className={`counterBox-quantity ${
          title === "Available"
            ? "green"
            : title === "Out of Stock"
            ? "red"
            : null
        }`}
      >
        {handleQuantity()}
      </p>
    </article>
  );
}

export default CounterBox;
