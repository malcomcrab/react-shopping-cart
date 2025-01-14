import { useState } from "react";

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
    <div className="product-display-card">
      <h5>{productApiData.title}</h5>
      <img height="auto" width="200" src={productApiData.image} />
      <p>£{productApiData.price.toFixed(2)}</p>
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
  );
}

export default ProductDisplayTemplate;
