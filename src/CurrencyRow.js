import React from "react";

export default function CurrencyRow(props) {
  const { currencyOptions, selectCurrency } = props;
  console.log("select", selectCurrency);

  return (
    <div>
      <input type="number" className="input" />
      <select value={selectCurrency}>
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
