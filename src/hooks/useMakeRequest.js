import { useState, useEffect } from "react";

const useMakeRequest = (endpoint) => {
  const [result, setResult] = useState({
    data: null,
    error: null,
  });

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        const response = await fetch(endpoint);
        const json = await response.json();
        setResult((old) => ({ ...old, data: json }));
      } catch (error) {
        setResult((old) => ({ ...old, error: new Error(error).message }));
      }
    };

    asyncFunc();
  }, [endpoint]);

  return result;
};

export default useMakeRequest;
