import HeaderShop from "../features/shop/HeaderShop";
import ProductsSection from "../features/shop/ProductsSection";
import LoginButton from "../features/shop/LoginButton";
function ShopPage() {
  return (
    <>
      <HeaderShop />
      <main>
        <ProductsSection />
      </main>
      <LoginButton />
    </>
  );
}

export default ShopPage;
