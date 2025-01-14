import FullBasketProductTemplate from "./FullBasketProductTemplate";
import styles from "../css-modules/FullBasketDisplay.module.css";
import hideWindow from "../assets/svg-images/hideWindow.svg";

function FullBasketDisplay({
  totalItems,
  basketItems,
  setBasketItems,
  basketSubtotal,
}) {
  const basketElement = document.querySelector("#checkout-basket-container");

  const handleHideBasket = () => {
    basketElement.style.display = "none";
  };

  const handleClearBasket = () => {
    setBasketItems((basketItems) => []);
  };

  return (
    <div id="checkout-basket-container">
      <div className={styles.header}>
        <h3>Shopping Cart:</h3>
        <img height="50" src={hideWindow} onClick={handleHideBasket} />
      </div>

      <p>Total items goes here: {totalItems}</p>

      <div id="basket-product-display">
        <p>Order List goes here:</p>
        {basketItems &&
          basketItems.map((item) => {
            return (
              <FullBasketProductTemplate 
                key={item.key} 
                productInfo={item} 
                basketItems={basketItems} 
                setBasketItems={setBasketItems}/>
            );
          })}
      </div>

      <div>
        <p>Sub Total: {basketSubtotal.toFixed(2)}</p>
      </div>
      <div id="basket-controls">
        <button>Checkout</button>
        <button onClick={handleClearBasket}>Clear All</button>
      </div>
    </div>
  );
}

export default FullBasketDisplay;
