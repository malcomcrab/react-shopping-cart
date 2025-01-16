import FetchProductsApi from "./FetchProductsApi";
import styles from "../css-modules/ProductsDisplay.module.css"

function ProductsDisplay({
  productsApiData,
  setProductsApiData,
  handleAddToBasketClick,
  basketItems,
  setBasketItems,
}) {
  return (
    <>
      <div id={"products-display"} className={styles.productsDisplay}>
        <FetchProductsApi
          productsApiData={productsApiData}
          setProductsApiData={setProductsApiData}
          basketItems={basketItems}
          setBasketItems={setBasketItems}
        />
      </div>
    </>
  );
}

export default ProductsDisplay;
