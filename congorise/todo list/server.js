const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let tasks= [];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const task = {
    id: Date.now(),
    text: req.body.text
  };
  tasks.push(task);
  res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
  tasks = tasks.filter(task => task.id !== parseInt(req.params.id));
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});