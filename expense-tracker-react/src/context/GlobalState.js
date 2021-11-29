import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

import axios from "axios";

//Initial state =
// const initialState = {
//   transactions: [
//     { id: 1, text: "Flower", amount: -20 },
//     { id: 2, text: "Salary", amount: 300 },
//     { id: 3, text: "Book", amount: -10 },
//     { id: 4, text: "Camera", amount: 150 },
//   ],
//   loading: true,
// };

const initialState = {
  transactions: [],
  error: null,
  loading: true,
};
// Create context
export const GlobalContext = createContext(initialState);

//Provider context
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  async function getTransactions() {
    try {
      console.log("trying to get some data");
      axios.defaults.baseURL = "http://localhost:5000";
      const res = await axios.get("/api/v1/transactions");
      // console.log(res.data[0]);
      console.log(res.data.data);

      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data,
      });
    } catch (error) {
      console.log(error);
      // dispatch({
      //   type: "TRANSACTION_ERROR",
      //   payload: error.response.data.error,
      // });
    }
  }

  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`/api/v1/transactions/${id}`);

      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  async function addTransaction(transaction) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/v1/transactions", transaction, config);
      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
