import Navbar from "../NavBar";
import styles from "../../css-modules/Header.module.css";
import { useEffect } from "react";
import PropTypes from "prop-types";
import ShoppingBasketIcon from "../ShoppingBasketIcon";

function Header({ basketItems, basketSubtotal }) {
  const basketElement = document.querySelector("#checkout-basket-container");

  const handleDisplayBasket = () => {
    basketElement.style.display = "grid";
  };

  const advertArray = [
    "I am advert one",
    "I am advert two",
    "I am advert three",
  ];

  useEffect(() => {
    const advertText = document.querySelector("#adText");
    let i = 0;
    const key = setInterval(() => {
      advertText.textContent = advertArray[i];
      i > 1 ? (i = 0) : i++;
    }, 5000);
    return () => {
      clearInterval(key);
    };
  }, []);

  return (
    <div
      role="headerContainer"
      id="header"
      name="header"
      className={styles.header}
    >
      <div className={styles.advert}>
        <p id="adText" className={styles.adText}>
          {advertArray[2]}
        </p>
      </div>

      <div id={styles.headerMain}>
        <Navbar className={styles.navbar} />

        <div className={styles.title}>
          <h1 id="main-title">The Clothing Store</h1>
        </div>

        <ShoppingBasketIcon
          onClick={handleDisplayBasket}
          basketItems={basketItems}
          basketSubtotal={basketSubtotal}
        />
      </div>
    </div>
  );
}

Header.propTypes = {
  basketItems: PropTypes.array,
  basketSubtotal: PropTypes.number,
};

export default Header;
