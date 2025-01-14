import Navbar from "./NavBar";
import styles from "../css-modules/Header.module.css";
import shopBasket from "../assets/svg-images/shopBasket.svg";

function Header({ basketItems, basketSubtotal }) {
  const basketElement = document.querySelector("#checkout-basket-container");

  const handleDisplayBasket = () => {
    basketElement.style.display = "grid";
  };

  return (
    <div id="header" className={styles.header}>
      <div className={styles.advert}>
        <p>I'm an advert</p>
      </div>

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
  );
}

export default Header;
