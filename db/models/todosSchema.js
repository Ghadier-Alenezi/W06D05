const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema({
    taskName: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
    isCompleted: { type: Boolean, default: false},
  });

  module.exports = mongoose.model("Todos", todosSchema);
