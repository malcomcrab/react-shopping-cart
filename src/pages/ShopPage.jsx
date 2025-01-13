import { useEffect } from "react"
import Header from "../components/Header"
import InfoBar from "../components/InfoBar"
import ProductsDisplay from "../components/ProductsDisplay"
import { useState } from "react"
import FullBasketDisplay from "../components/FullBasketDisplay"



function ShopPage(){

    const [basketItems, setBasketItems] = useState([])
    const [productsApiData, setProductsApiData] = useState([])
    const [basketSubtotal, setBasketSubtotal] = useState(0)

    useEffect(() => {
        let b = 0 
        if(basketItems.length > 0){
            b += basketItems.reduce((accum, item) => 
                accum + item.price, 0)
            setBasketSubtotal(basketSubtotal => b)
        }
           
    }, [basketItems]);

    return(
        <div id="homepage-body">
        <Header basketItems={basketItems}
                basketSubtotal={basketSubtotal}
        />
        <ProductsDisplay 
            productsApiData={productsApiData} 
            setProductsApiData={setProductsApiData}
            basketItems={basketItems}
            setBasketItems={setBasketItems}
        />
        <FullBasketDisplay />
        <InfoBar />
        </div>
    )
}

export default ShopPage