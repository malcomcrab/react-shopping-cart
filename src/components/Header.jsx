import Navbar from "./NavBar";
import styles from "../css-modules/Header.module.css";
function Header({ basketItems }) {
  return (
    <div id="header" className={styles.header}>
      <div className={styles.advert}>
        <p>I'm an advert</p>
      </div>

      <div className={styles.links}>
        <p>Basket: {basketItems.length}</p>
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
