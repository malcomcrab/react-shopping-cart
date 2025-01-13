import Navbar from "./NavBar";
import styles from "../css-modules/Header.module.css";
function Header({ basketItems, basketSubtotal }) {
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
        {basketItems && <p>Basket: {basketItems.length}</p>
        }
        {basketItems && <p>Total: £ {basketSubtotal.toFixed(2)} </p>}
        
      </div>

      

      
    </div>
  );
}

export default Header;
