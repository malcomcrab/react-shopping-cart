import { useEffect, hooks } from "react";
import styles from "../css-modules/ProductsDisplay.module.css";
import ProductDisplayTemplate from "./ProductDisplayTemplate";
import {useFetchApi} from "./useFetchApi";

function ProductsDisplay({
  productsApiData,
  setProductsApiData,
  handleAddToBasketClick,
  basketItems,
  setBasketItems,
}) {
  const productApiUrl = "https://fakestoreapi.com/products"
  const { loading, error, apiData } = useFetchApi(productApiUrl); 

  useEffect(() => {   
    setProductsApiData((productsApiData) => apiData)
  }, [apiData]);

  return (
    <>
      <div id={"products-display"} className={styles.productsDisplay}>
        {error && <div>{error}</div>}
        {loading && <div>{loading}</div>}
        {productsApiData &&
                productsApiData.map((item) => {
                  return (
                    <ProductDisplayTemplate
                      key={item.title}
                      productApiData={item}
                      basketItems={basketItems}
                      setBasketItems={setBasketItems}
                      
                    />
                  );
                })}
      </div>
    </>
  );
}

export default ProductsDisplay;
