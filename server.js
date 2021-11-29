const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");

// async function start() {
//   const dotenv = require("dotenv");
//   // const colors = require("colors");
//   // const morgan = require("morgan");
//   const connectDB = require("./config/database");

//   dotenv.config({ path: "./config/config.env" });

//   const result = await connectDB("SELECT * FROM transactions;");
//   console.log(result);
// }

// start();

const transactions = require("./routes/transaction");
dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// app.use(function (req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );

//   // Pass to next layer of middleware
//   next();
// });
app.use("/api/v1/transactions", transactions);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("expense-tracker-react/build"));

  app.get("*", (req, res) => {
    console.log("help mother fucker");
    res.sendFile(
      path.resolve(__dirname, "expense-tracker-react", "build", "index.html")
    );
  });
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
