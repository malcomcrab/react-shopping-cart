import { useEffect } from "react"
import Header from "../components/Header"
import InfoBar from "../components/InfoBar"
import ProductsDisplay from "../components/ProductsDisplay"
import { useState } from "react"
import FetchProductsApi from "../components/FetchProductsApi"

  

function ShopPage(){

    return(
        <div id="homepage-body">
        <Header />
        <ProductsDisplay />
        <InfoBar />
        </div>
    )


}

export default ShopPage