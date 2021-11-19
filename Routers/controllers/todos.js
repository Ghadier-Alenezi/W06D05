const todoModel = require("./../../db/models/todosSchema");

const creatTask = (req, res) => {
  const { taskName } = req.body;

  const newTask = new todoModel({
    taskName,
  });

  newTask
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { creatTask };
