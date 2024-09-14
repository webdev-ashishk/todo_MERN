const express = require('express');
const app = express();
const mongoose = require('mongoose');
const TodoModel = require('./models/Models');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());
mongoose
  .connect('mongodb+srv://deepika:c6XWKTuf85KU6Vc6@demo.2uvoc.mongodb.net/', {
    dbName: 'fedor-todo',
  })
  .then(() => {
    console.log('mongodb connected successfully');
  })
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.json('Welcome to TODO backend');
});
app.post('/api/v1/createtodo', async (req, res) => {
  const TodoData = req.body;
  const result = await TodoModel.create(TodoData);
  console.log(result);
  res.json('successfully created todo in database');
});
app.get('/todos', async (req, res) => {
  const result = await TodoModel.find({});
  res.json(result);
});
app.listen(3000, () => {
  console.log('server is running on local host 3000');
});
