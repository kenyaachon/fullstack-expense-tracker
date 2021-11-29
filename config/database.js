//GRANT ALL PRIVILEGES ON DATABASE 'expense-tracker' TO backend;

const { Pool, Client } = require("pg");
// const connectingString =
//   "postgresql://backend:'mysecretpassword'@localhost:5432/expensetracker";

// const pool = new Pool({
//   connectingString,
// });

// pool.query("SELECT * FROM citites;", (err, res) => {
//   console.log(err, res);
//   pool.end;
// });

// const client = new Client({
//   host: "localhost",
//   user: "backend",
//   password: "mysecretpassword",
//   database: "expensetracker",
//   port: 5432,
// });

// client.connect();

// client.query("SELECT NOW();", (err, res) => {
//   console.log(err, res);
//   client.end();
// });

const connectDB = async (queryString) => {
  try {
    const client = new Client({
      host: "localhost",
      user: "backend",
      password: "mysecretpassword",
      database: "expensetracker",
      port: 5432,
    });

    client.connect();

    // client.query(queryString, (err, res) => {
    //   //   console.log(err, res);
    //   console.log(err);
    //   client.end();
    //   return res.rows;
    // });

    const result = await client.query(queryString);
    console.log(result.rows);
    client.end();
    return result;
  } catch (error) {
    console.log(`Error: ${error.message}`.red);
    process.exit(1);
  }
};

module.exports = connectDB;
