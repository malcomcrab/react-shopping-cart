import { useState, useEffect } from "react";
import ProductDisplayTemplate from "./ProductDisplayTemplate";

const FetchProductsApi = ({
  productsApiData,
  setProductsApiData,
  basketItems,
  setBasketItems,
}) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setProductsApiData(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      {productsApiData &&
        productsApiData.map((item) => {
          return (
            <ProductDisplayTemplate
              key={item.title}
              productApiData={item}
              basketItems={basketItems}
              setBasketItems={setBasketItems}
            />
          );
        })}
    </>
  );
};

export default FetchProductsApi;
