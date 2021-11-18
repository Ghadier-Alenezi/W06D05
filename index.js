const express = require("express");
const dotenv = require("dotenv");

const db = require("./db/db.js");

const app = express()
app.use(express.json());
dotenv.config()

const PORT = process.env.PORT || 3001;









app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });