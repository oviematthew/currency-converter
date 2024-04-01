import React, { useEffect, useState } from "react";
import "./App.css";
import CurrencyRow from "./CurrencyRow";

function App() {
  const [currencyOptions, setCurrenctyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  console.log("currency options", currencyOptions);

  useEffect(() => {
    fetch(
      "https://api.currencyapi.com/v3/latest?apikey=cur_live_9KSbrxVDY2E4v5pLlgFZdcmEVSicfhwCdJjttMxq"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("data", data);
        const firstCurrency = Object.keys(data.data)[0];
        const secondCurrency = Object.keys(data.data)[1];
        setCurrenctyOptions([...Object.keys(data.data)]);
        setFromCurrency(firstCurrency);
        setToCurrency(secondCurrency);
      })
      .catch((error) => {
        console.log("Fetch error:", error);
      });
  }, []);
  return (
    <>
      <h1>Currency Converter</h1>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectCurrency={fromCurrency}
      />
      <div className="equals">=</div>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectCurrency={toCurrency}
      />
    </>
  );
}

export default App;
