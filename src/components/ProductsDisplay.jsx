import FetchProductsApi from "./FetchProductsApi";

function ProductsDisplay({ productsApiData, setProductsApiData }) {
  return (
    <>
      <div id={"products-display"}>
        <FetchProductsApi
          productsApiData={productsApiData}
          setProductsApiData={setProductsApiData}
        />
      </div>
    </>
  );
}

export default ProductsDisplay;
