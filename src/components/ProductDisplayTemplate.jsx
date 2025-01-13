import { useState } from "react";


  

function ProductDisplayTemplate({ productApiData, basketItems, setBasketItems}) {


   const [totalProduct, setTotalProduct] = useState(1)

    const handleAddToBasketClick = (event) => {
      console.log(event.target.value)
      for(let i = 0; event.target.value > i; i++){
         setBasketItems((basket) => [...basket, productApiData])
      }
    }

  return (
    <div className="product-display-card">
      <img height="auto" width="200" src={productApiData.image} />
      <h5>{productApiData.title}</h5>
      <p>£{productApiData.price.toFixed(2)}</p>
      <input name={'add-total'} type="number" onChange={(e)=> setTotalProduct(e.target.value)}
value={totalProduct} ></input>
      <button onClick={handleAddToBasketClick} value={totalProduct}
       >+</button>
    </div>
  );
}

export default ProductDisplayTemplate;
