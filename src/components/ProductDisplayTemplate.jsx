import { useState } from "react";
import styles from "../css-modules/ProductDisplayTemplate.module.css"

function ProductDisplayTemplate({
  productApiData,
  basketItems,
  setBasketItems,
}) {
  const [totalProduct, setTotalProduct] = useState(1);

  const handleAddToBasketClick = (event) => {
    for (let i = 0; event.target.value > i; i++) {
      productApiData.key = crypto.randomUUID();
      setBasketItems((basketItems) => [...basketItems, productApiData]);
    }
  };

  return (
    <div className={styles.productContainer}>
      
      <img height="auto" width="200" src={productApiData.image} />
      <h5 className={styles.productTitle}>{productApiData.title}</h5>
      <p>£{productApiData.price.toFixed(2)}</p>
      <div className={styles.addProductContainer}>
      <input
        name={"add-total"}
        type="number"
        onChange={(e) => setTotalProduct(e.target.value)}
        value={totalProduct}
      ></input>
      <button onClick={handleAddToBasketClick} value={totalProduct}>
        +
      </button>
      </div>
    </div>
  );
}

export default ProductDisplayTemplate;
