import FullBasketProductTemplate from "./FullBasketProductsTemplate"
/* 

Title
Total Items in basket (display)
List of items: (mapped through template component)
    -Title
    -Pic
    -Total Ordered
    -Individual Price
    -Update total to order (input + submit button)
    -Delete total of item from basket
Subtotal display
Checkout button
Clear all items button


*/

function FullBasketDisplay({ totalItems, basketItems, basketSubtotal }){

    const basketElement = document.querySelector('#checkout-basket-container')
        

    const handleHideBasket = () => {
       basketElement.style.display = 'none' 
    }

    return(
        <div id="checkout-basket-container">
            <div id="basket-header">
                <h3>Shopping Cart:</h3>
                <button onClick={handleHideBasket}>Hide Basket</button>
            </div>

            <p>Total items goes here: {totalItems}</p>
            
            
            <div id="basket-product-display">
            <p>Order List goes here:</p>
                {basketItems && basketItems.map((item) => {
                    return <FullBasketProductTemplate productInfo={item}/>
                })}

            </div>
            
            <div>
                <p>Sub Total: {basketSubtotal.toFixed(2)}</p>
            </div>
            <div id="basket-controls">
                <button>Checkout</button>
                <button>Clear All</button>
            </div>
        </div>
    )
}

export default FullBasketDisplay;