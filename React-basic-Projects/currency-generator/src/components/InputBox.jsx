import React from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  currencyOptions = [],
  onCurrencyChange,
  selectCurrency,
  amountDisabled = false,
}) {
  return (
    <div className="bg-white p-3 rounded-lg flex gap-2">
      <div className="w-1/2">
        <label className="text-gray-500 mb-2 inline-block">
          {label}
        </label>
        <input
          type="number"
          className="outline-none w-full bg-transparent py-1.5"
          value={amount}
          disabled={amountDisabled}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      <div className="w-1/2 flex flex-col items-end">
        <label className="text-gray-500 mb-2 inline-block">
          Currency
        </label>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
