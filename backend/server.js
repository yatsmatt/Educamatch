const e = require("express");
const express = require("express");
const donenv = require("dotenv").config();
const { errorHeanler } = require("./middleware/errormiddleware");
const port = process.env.port || 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//route to routes
app.use("/api/goals", require("./routes/goalRoutes"));
app.use(errorHeanler);
//setver start function
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
