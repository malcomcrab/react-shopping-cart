import FetchProductsApi from "./FetchProductsApi";

function ProductsDisplay({
  productsApiData,
  setProductsApiData,
  handleAddToBasketClick,
  basketItems,
  setBasketItems,
}) {
  return (
    <>
      <div id={"products-display"}>
        <FetchProductsApi
          productsApiData={productsApiData}
          setProductsApiData={setProductsApiData}
          basketItems={basketItems}
          setBasketItems={setBasketItems}
        />
      </div>
    </>
  );
}

export default ProductsDisplay;
