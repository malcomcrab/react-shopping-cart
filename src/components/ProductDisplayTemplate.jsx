import { useState } from "react";
import { PureComponent } from "react";


  

function ProductDisplayTemplate({ productApiData, basketItems, setBasketItems}) {


   const [inc, setInc] = ("")

    const updateNumber = (event) => {
      const t = event.target.value
      setInc(t)
    }

    const handleAddToBasketClick = (event) => {
      const newData = event.target.value
      return setBasketItems((basket) => [...basket, productApiData])
      
    }
    console.log(basketItems)
  return (
    <div className="product-display-card">
      <img height="auto" width="200" src={productApiData.image} />
      <h5>{productApiData.title}</h5>
      <p>{productApiData.price}</p>
      <input name={'add-t otal'} type="number" onChange={updateNumber} value={inc} ></input>
      <button onClick={handleAddToBasketClick} value={productApiData}
       >Add To Basket</button>
    </div>
  );
}

export default ProductDisplayTemplate;
