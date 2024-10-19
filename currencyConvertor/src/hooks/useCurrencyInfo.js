import { useEffect, useState } from "react";
const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, [currency]);

  const fetchData = async () => {
    const jsonData = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.10.17/v1/currencies/${currency}.json`
    );
    const json = await jsonData.json();
    setData(json[currency]);
  };

  return data;
};

export default useCurrencyInfo;
