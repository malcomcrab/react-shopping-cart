import { useState } from "react";
import { PureComponent } from "react";


  

function ProductDisplayTemplate({ productApiData, basketItems, setBasketItems}) {


   const [totalProduct, setTotalProduct] = useState("")

    const handleAddToBasketClick = ({event}) => {
      return setBasketItems((basket) => [...basket, productApiData])
      
    }

  return (
    <div className="product-display-card">
      <img height="auto" width="200" src={productApiData.image} />
      <h5>{productApiData.title}</h5>
      <p>{productApiData.price}</p>
      <input name={'add-total'} type="number" onChange={(e)=> setTotalProduct(e.target.value)}
value={inc} ></input>
      <button onClick={handleAddToBasketClick} value={totalProduct}
       >Add To Basket</button>
    </div>
  );
}

export default ProductDisplayTemplate;
