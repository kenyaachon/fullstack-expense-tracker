//const Transaction = require("../models/Transaction");

// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  Public
exports.getTransactions = async (req, res, next) => {
  try {
    console.log("getting some stuff done woop woop");
    const dotenv = require("dotenv");

    const connectDB = require("../config/database");

    dotenv.config({ path: "./config/config.env" });

    const result = await connectDB("SELECT * FROM transactions;");
    return res.status(200).json({
      success: true,
      count: result.rows.length,
      data: result.rows,
    });

    // return res.status(200).json({
    //   success: true,
    //   count: list.length,
    //   data: list,
    // });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc    Add transaction
// @route   POST /api/v1/transactions
// @access  Public
exports.addTransaction = async (req, res, next) => {
  try {
    const dotenv = require("dotenv");

    const connectDB = require("../config/database");

    dotenv.config({ path: "./config/config.env" });

    const { text, amount } = req.body;
    console.log(text, amount);
    const query = {
      text: "INSERT INTO transactions(amount, expense, user_id) VALUES ($1, $2, $3);",
      values: [amount, text, 2],
    };
    const result = await connectDB(query);

    console.log(req.body);
    return res.status(201).json({
      success: true,
      data: { expense: text, amount: amount },
    });
  } catch (error) {
    console.log(error);
  }
};

// @desc    Delete transaction
// @route   DELETE /api/v1/transactions/:id
// @access  Public
exports.deleteTransaction = async (req, res, next) => {
  try {
    const dotenv = require("dotenv");

    const connectDB = require("../config/database");

    dotenv.config({ path: "./config/config.env" });

    const query = {
      text: "DELETE FROM transactions WHERE id = $1;",
      values: [req.params.id],
    };

    await connectDB(query);

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    console.log(error);
  }
};
