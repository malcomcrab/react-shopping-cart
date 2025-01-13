import shopBin from "../assets/svg-images/shopBin.svg"
import styles from "../css-modules/FullBasketProductTemplate.module.css"


function FullBasketProductTemplate({ productInfo }){

    return (
        <div className={styles.product}>
            <div className={styles.header}>
                <p class={styles.title}>{productInfo.title}</p>
                <img height={20} src={shopBin}></img>
            </div>
            
            <img width="50" src={productInfo.image}/>
            <p>£ {productInfo.price.toFixed(2)} </p>
            <input placeholder="number needed"></input>
            <button>Update number</button>
        </div>
    )

}

export default FullBasketProductTemplate