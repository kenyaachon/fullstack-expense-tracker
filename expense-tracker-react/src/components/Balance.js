import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const totalBalance = amounts
    .reduce((accumulator, amount) => (accumulator += amount), 0)
    .toFixed(2);

  const sign = totalBalance < 0 ? "-" : " ";

  console.log(totalBalance);
  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balance">
        {sign}${Math.abs(totalBalance)}
      </h1>
    </div>
  );
};
