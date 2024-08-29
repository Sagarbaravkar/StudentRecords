// require("dotenv").config();
require('dotenv').config({ path: './.env.dev' });
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const router = require("./routes/routes");
app.use(express.json());
app.use("/api/", router);

app.listen(PORT, () => {
  console.log(`listening in the PORT ${PORT}`);
});

console.log("welcome in Node js")