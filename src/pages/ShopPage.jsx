import { useEffect } from "react"
import Header from "../components/Header"
import InfoBar from "../components/InfoBar"
import ProductsDisplay from "../components/ProductsDisplay"
import { useState } from "react"


  

function ShopPage(){

    const [basketItems, setBasketItems] = useState([])
    const [productsApiData, setProductsApiData] = useState([])

    return(
        <div id="homepage-body">
        <Header />
        <ProductsDisplay 
            productsApiData={productsApiData} 
            setProductsApiData={setProductsApiData}
            basketItems={basketItems}
            setBasketItems={setBasketItems}
        />
        <InfoBar />
        </div>
    )
}

export default ShopPage