const express = require("express");
const { createUser, getAllusers } = require("./../controllers/users");

const userRouter = express.Router();

userRouter.get("/", getAllusers)
userRouter.post("/create", createUser);

module.exports = userRouter;