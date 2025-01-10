import { PureComponent } from "react";

function ProductDisplayTemplate({ productApiData }) {
  return (
    <div className="product-display-card">
      <img height="auto" width="200" src={productApiData.image} />
      <h5>{productApiData.title}</h5>
      <p>{productApiData.price}</p>
      <input type="number" value="0"></input>
      <button>Add To Basket</button>
    </div>
  );
}

export default ProductDisplayTemplate;
