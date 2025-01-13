

function FullBasketProductTemplate({ productInfo }){

    return (
        <div>
            <p>Product Title</p>
            <img width="50" src={productInfo.image}/>
            <p>£ {productInfo.price.toFixed(2)} </p>
            <input placeholder="number needed"></input>
            <button>Update number</button>
        </div>
    )

}

export default FullBasketProductTemplate