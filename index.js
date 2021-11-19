const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./db/db.js");

const app = express()
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
dotenv.config()

const userRouter = require("./Routers/routes/users")
app.use("/users", userRouter)

const todosRouter = require("./Routers/routes/todos")
app.use("/todos", todosRouter)

const PORT = process.env.PORT || 3001;

// listen is the last thing
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });