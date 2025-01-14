import Navbar from "../NavBar";
import styles from "../../css-modules/Header.module.css";
import shopBasket from "../../assets/svg-images/shopBasket.svg";
import { useEffect } from "react";

function Header({ basketItems, basketSubtotal }) {
  const basketElement = document.querySelector("#checkout-basket-container");

  const handleDisplayBasket = () => {
    basketElement.style.display = "grid";
  };

  const advertArray = [
    'I am advert one',
    'I am advert two',
    'I am advert three'
        
  ]

  useEffect(() => {
    const advertText = document.querySelector("#addText")
    let i = 0
    const key = setInterval(() => {
      advertText.textContent = advertArray[i]
      if(i > 1){
        i = 0
      } else {
        i++
      }
    }, 5000);

    return () => {
      clearInterval(key);
    };
  }, [])


  return (
    <div id="header" className={styles.header}>
      
      <div className={styles.advert}>
        <p id='addText'>{advertArray[2]}</p>
      </div>

      <div id={styles.headerMain}>
        <Navbar className={styles.navbar} />

        <div className={styles.title}>
          <h1 id="main-title">The Clothing Store</h1>
        </div>

        <div className={styles.headerBasket}>
          <img height="30" src={shopBasket} onClick={handleDisplayBasket} />
          {basketItems && <>{/*<p>{basketItems.length}</p>*/}</>}
          {basketItems && <p>£{basketSubtotal.toFixed(2)} </p>}
        </div>
      </div>

      
    </div>
  );
}

export default Header;
