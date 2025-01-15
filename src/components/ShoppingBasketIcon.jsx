import styles from "../css-modules/ShoppingBasketIcon.module.css"
import shopBasket from "../assets/svg-images/shopBasket.svg"

function ShoppingBasketIcon({ onClick, basketSubtotal, basketItems}){

    return(
        <div name="show basket icon" className={styles.headerBasket}>
                  <img alt="shopping basket icon" height="30" src={shopBasket} onClick={onClick} />
                  {basketItems && <p role="basketSubtotal">£{basketSubtotal.toFixed(2)}</p>}
                </div>
    )
}

export default ShoppingBasketIcon 