const express = require("express");
const { getAllTasks, creatTask } = require("./../controllers/todos");

const todosRouter = express.Router();

todosRouter.get("/", getAllTasks);
todosRouter.post("/addTask", creatTask);

module.exports = todosRouter;