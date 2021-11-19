const express = require("express");
const { creatTask } = require("./../controllers/todos");

const todosRouter = express.Router();

todosRouter.post("/addTask", creatTask);

module.exports = todosRouter;