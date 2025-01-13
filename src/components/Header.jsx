import Navbar from "./NavBar";
import styles from "../css-modules/Header.module.css";
function Header({ basketItems, basketSubtotal }) {
  return (
    <div id="header" className={styles.header}>
      <div className={styles.advert}>
        <p>I'm an advert</p>
      </div>

      <div className={styles.links}>
        {basketItems && <p>Basket: {basketItems.length}</p>
        }
        {basketItems && <p>Total: £ {basketSubtotal.toFixed(2)} </p>}
        <p>links</p>
      </div>

      <div className={styles.title}>
        <h1 id="main-title">The Clothing Store</h1>
      </div>

      <Navbar className={styles.navbar} />
    </div>
  );
}

export default Header;
