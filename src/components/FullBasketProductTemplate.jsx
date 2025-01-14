import shopBin from "../assets/svg-images/shopBin.svg";
import styles from "../css-modules/FullBasketProductTemplate.module.css";

function FullBasketProductTemplate({ productInfo, setBasketItems, basketItems }) {
  
  const handleRemoveProduct = (event) => {
    const basketFiltered = basketItems.filter((item) => {
        if(item.key != event.target.value){
            return item
        }
    })
    setBasketItems((basketItems) => basketFiltered)
  };

  return (
    <div className={styles.product}>
      <div className={styles.header}>
        <p className={styles.title}>{productInfo.title}</p>
        <button
          onClick={handleRemoveProduct}
          height={20}
          src={shopBin}
          value={productInfo.key}
        ><img src={shopBin}/></button>
      </div>

      <img width="50" src={productInfo.image} />
      <p>£ {productInfo.price.toFixed(2)} </p>
    </div>
  );
}

export default FullBasketProductTemplate;
