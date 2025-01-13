
/* 

Title
Total Items in basket (display)
List of items:
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

function FullBasketDisplay(){

    return(
        <div id="checkout-basket-container">
            <div id="basket-header">
                <h3>Shopping Cart:</h3>
                <button>Hide Basket</button>
                
            </div>
            <p>Total items goes here:</p>
            <p>Order List goes here:</p>

            <div id="basket-controls">
                <button>Checkout</button>
                <button>Clear All</button>
            </div>
        </div>
    )
}

export default FullBasketDisplay;