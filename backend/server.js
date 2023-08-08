const express = require("express");
const colors = require("colors");
const donenv = require("dotenv").config();
const { errorHeanler } = require("./middleware/errormiddleware");
const { connectDB } = require("./config/db");
const port = process.env.port || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//route to routes
app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHeanler);
//setver start function
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
