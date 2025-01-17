import { useState, useEffect, useCallback } from "react";

import PropTypes from "prop-types";

export const useFetchApi = () =>  {

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState(null)

  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setApiData(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [])
  
   
  return {loading, error, apiData}
}



