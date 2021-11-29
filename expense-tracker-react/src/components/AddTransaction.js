import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const changeText = (event) => {
    setText(event.target.value);
  };

  const changeAmount = (event) => {
    setAmount(event.target.value);
  };

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (event) => {
    event.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };
  return (
    <div>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(event) => changeText(event)}
            id="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative-expense, positive -income)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(event) => changeAmount(event)}
            placeholder="Enter amount ..."
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
};
